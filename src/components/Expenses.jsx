import React from "react";

const Expenses = ({ expenses }) => {
  return (
    <div>
      <p>{expenses.nameExpenses}</p>
      <p>{expenses.valueExpense}</p>
    </div>
  );
};

export default Expenses;
