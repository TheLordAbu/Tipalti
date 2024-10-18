const URL = "https://tip-transactions.vercel.app/api/transactions";

export async function getData() {
  const res = await fetch(`${URL}?page=1`);
  const data = await res.json();
  const tableData = data.transactions;
  return tableData;
}
