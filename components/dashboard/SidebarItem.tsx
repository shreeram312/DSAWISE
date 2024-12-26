import React from "react";

interface SidebarItemProps {
  name: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name }) => {
  return (
    <div className="p-2 m-1 cursor-pointer rounded-md hover:bg-gray-700 transition">
      {name}
    </div>
  );
};

export default SidebarItem;
