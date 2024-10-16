import React, { ReactNode } from "react";
type thProps = {
  children: ReactNode;
};
const TableHead: React.FC<thProps> = ({ children }) => {
  return <th className="font-bold bg-gray-200 text-left py-2">{children}</th>;
};

export default TableHead;
