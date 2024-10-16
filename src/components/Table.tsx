import React, { useEffect, useState } from "react";
import { getData } from "../API/api";
import TableHead from "./TableHead";

interface apiProps {
  amount: number;
  category: string;
  date: string;
  merchant: string;
  id: number;
}

const Table: React.FC<{}> = () => {
  const [apiData, setApiData] = useState<apiProps[]>();
  useEffect(() => {
    getData().then((data) => setApiData(data));
  }, []);
  // const { amount, category, date, merchant, id } = apiData;
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Category</TableHead>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;

// import React, { useEffect, useState } from 'react';
// import { getData } from '../API/api';

// interface Data {
//   id: number;
//   name: string;
//   age: number; // Define the properties based on your actual data structure
// }

// const TableHead: React.FC = () => {
//   const [data, setData] = useState<Data[]>([]); // State to store fetched data

//   useEffect(() => {
//     // Directly call getData and set the state with the returned data
//     getData().then((result) => {
//       setData(result); // Set the fetched data to the state
//     });
//   }, []); // Empty dependency array to call this effect only once on mount

//   return (
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Age</th>
//       </tr>
//       {data.map((item) => (
//         <tr key={item.id}>
//           <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.age}</td>
//         </tr>
//       ))}
//     </thead>
//   );
// };

// export default TableHead;
