"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useMemo, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { useParams } from "next/navigation";

import "../../app/globals.css";

const openDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open("BlockNoteDB", 1);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains("notes")) {
        db.createObjectStore("notes", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Failed to open database.");
  });
};

const saveToIndexedDB = async (id: string, jsonBlocks: any) => {
  const db = await openDB();
  const transaction = db.transaction("notes", "readwrite");
  const store = transaction.objectStore("notes");
  store.put({ id, content: jsonBlocks });

  transaction.oncomplete = () => {
    console.log("Data saved to IndexedDB");
  };

  transaction.onerror = () => {
    console.error("Error saving to IndexedDB");
  };
};

const loadFromIndexedDB = async (id: string) => {
  const db = await openDB();
  const transaction = db.transaction("notes", "readonly");
  const store = transaction.objectStore("notes");
  const request = store.get(id);

  return new Promise<any>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result?.content || undefined);
    request.onerror = () => reject("Error loading from IndexedDB.");
  });
};

// Editor component
export default function Editor() {
  const [initialContent, setInitialContent] = useState("loading");
  const { id } = useParams() as { id: string };

  useEffect(() => {
    loadFromIndexedDB(id)
      .then((content) => {
        setInitialContent(content);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    //@ts-ignore
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  if (editor === undefined) {
    return "Loading content...";
  }

  return (
    <BlockNoteView
      editor={editor}
      onMouseLeave={() => {}}
      onChange={() => {
        saveToIndexedDB(id, editor.document);
      }}
    />
  );
}
