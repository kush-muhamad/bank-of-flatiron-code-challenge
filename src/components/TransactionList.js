import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transaction }) {
  const transactionList = transaction.map((transaction) => (
    <Transaction
      key={transaction.id}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      amount={transaction.amount}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th className="t-head">Date</th>
          <th className="t-head">Description</th>
          <th className="t-head">Category</th>
          <th className="t-head">Amount</th>
        </tr>
      </thead>
      <tbody>{transactionList}</tbody>
    </table>
  );
}

export default TransactionList;
