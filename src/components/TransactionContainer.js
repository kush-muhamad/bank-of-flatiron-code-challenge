import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Search from "./Search";

function TransactionsContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactionList) => {
        setTransactions(transactionList);
      });
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
    console.log(typeof query);
    // return transactions.filter((transaction) =>
    //   {
    //     return transaction.description.toLowerCase() ===  query.toLowerCase()
    //   }
    // );
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransaction />
      <div className="table">
        {/* <input type="text" placeholder="Search..." onChange={handleSearch} /> */}
        <TransactionList transaction={transactions} />
      </div>
    </div>
  );
}
export default TransactionsContainer;
