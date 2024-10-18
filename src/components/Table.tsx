import React, { useEffect, useState } from "react";
import { getData } from "../model/api";
import { formatDate } from "../model/FormatDate";

import TableBody from "./TableBody";
import Loader from "../components/Loader.tsx";

interface apiProps {
  amount: number;
  category: string;
  date: string;
  merchant: string;
  id: number;
}

const Table: React.FC = () => {
  const [apiData, setApiData] = useState<apiProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData()
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const labels = Object.keys(apiData[0]);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            {labels.map((label, indx) => (
              <TableBody type="th" key={label}>
                {indx === 0
                  ? label.toUpperCase()
                  : label.charAt(0).toUpperCase() + label.slice(1)}
              </TableBody>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiData.map((data, indx) => (
            <tr key={indx}>
              <TableBody type="td">{data.id}</TableBody>
              <TableBody type="td">{formatDate(data.date)}</TableBody>
              <TableBody type="td">£{data.amount}</TableBody>
              <TableBody type="td">{data.merchant}</TableBody>
              <TableBody type="td">
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
              </TableBody>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
