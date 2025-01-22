"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.

  async function saveToStorage(jsonBlocks: any) {
    // Save contents to local storage. You might want to debounce this or replace
    // with a call to your API / database.
    console.log(jsonBlocks);
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
  }

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: "You'll see that the text is now blue",
      },
      {
        type: "paragraph",
        content:
          "Press the '/' key - the hovered Slash Menu items are also blue",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        saveToStorage(editor.document);
      }}
    />
  );
}
