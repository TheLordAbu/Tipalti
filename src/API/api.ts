// const URL = "https://date.nager.at/api/v2/publicholidays/2020/US";
const URL = "https://tip-transactions.vercel.app/api/transactions";

export async function getData() {
  const res = await fetch(`${URL}?page=1`);
  const data = await res.json();
  const tableData = data.transactions;
  console.log(tableData);
  return tableData;
  // console.log(data);
  // return data;
}
