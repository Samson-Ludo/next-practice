import React from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

interface LargeListProps {
  items: string[];
}

const LargeList1: React.FC<LargeListProps> = ({ items }) => {
  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style} className="px-4 py-2 border-b border-gray-200">
      {items[index]}
    </div>
  );

  return (
    <List height={500} itemCount={items.length} itemSize={35} width="100%">
      {Row}
    </List>
  );
};

export default LargeList1;
