import React from "react";

interface GridProps {
  items: { id: string | number; content: React.ReactNode }[];
}

const Grid1: React.FC<GridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-auto-fill min-w-[200px] gap-4 dark:text-black">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-100 p-5 rounded-md">
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Grid1;
