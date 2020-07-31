import React from "react";
import PropTypes from "prop-types";

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

Expenses.protoType = {
  expenses: PropTypes.object.isRequired,
};

export default Expenses;
