import React from "react";

const Expenses = ({ expenses }) => {
  let valueExpense = parseInt(expenses.valueExpense);
  let nameExpenses = expenses.nameExpenses;

  return (
    <li className="expensesMade">
      <p>{nameExpenses}</p>
      <span className="listExpense"> ${valueExpense} </span>
    </li>
  );
};

export default Expenses;
