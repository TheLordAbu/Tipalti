import React, { ReactNode } from "react";
type thProps = {
  children: ReactNode;
  type: string;
};
const TableBody: React.FC<thProps> = ({ children, type }) => {
  if (type == "th")
    return (
      <th className="font-bold bg-gray-200 text-left py-2 px-2 border border-slate-300">
        {children}
      </th>
    );
  if (type == "td")
    return (
      <td className="text-left py-2 px-2 border border-slate-300 font-semibold">
        {children}
      </td>
    );
};

export default TableBody;
