import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import Alert from "./Alert";
import PropTypes from "prop-types";

import ListaExpenses from "./ListaExpenses";

const Form = ({ budgetValue }) => {
  // // hooks gastos
  const [expenses, setExpenses] = useState({
    nameExpenses: "",
    valueExpense: "",
  });
  // almacenar gastos
  const [listExpenses, setListExpenses] = useState([]);
  // hooks validar dato presupuesto
  const [ErrorData, setErrorData] = useState();
  const [EmptyData, setEmptyData] = useState();

  // valor restante
  const [remaining, setRemaining] = useState(budgetValue);

  // validar si gasto es mayor presupuesto
  const [validateExpenses, SetValidateExpenses] = useState(false);

  // dato del soprepaso del presupuesto
  const [expensesOver, SetExpensesOver] = useState(0);

  const { nameExpenses, valueExpense } = expenses;

  const addExpenses = (e) => {
    e.preventDefault();

    // validar valor del gasto
    if (valueExpense < 0) {
      setErrorData(true);
      return;
    } else {
      setErrorData(false);
    }

    if (isNaN(valueExpense) || valueExpense === 0 || nameExpenses === "") {
      setEmptyData(true);
      return;
    } else {
      setEmptyData(false);
    }
    expenses.id = shortid.generate();
    setListExpenses([...listExpenses, expenses]);

    // let valueOver = 0
    // validar si gasto es mayor que presupuesto
    if (valueExpense > remaining) {
      SetExpensesOver((remaining - valueExpense) * -1);
      SetValidateExpenses(true);
    } else {
      SetValidateExpenses(false);
      setRemaining(remaining - valueExpense);
    }

    // reiniciar formulario
    setExpenses({
      nameExpenses: "",
      valueExpense: "",
    });
  };

  function setState(event) {
    setExpenses({
      ...expenses,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="one-half column">
        <form onSubmit={addExpenses}>
          <h2>Agrega tus gastos aqui</h2>
          <div className="camp">
            {ErrorData === true ? (
              <Error message="Los datos ingresados son incorrectos" />
            ) : null}
            {EmptyData === true ? (
              <Error message="Favor ingresar datos" />
            ) : null}
            <label> Nombre gastos</label>
            <input
              type="texto"
              placeholder="Ej. Arriendo, Transporte.."
              className=" u-full-width"
              name="nameExpenses"
              value={nameExpenses}
              onChange={setState}
            ></input>
          </div>
          <div className="camp">
            <label> Cantidad gastos</label>
            <input
              type="number"
              placeholder="Ej. 200$"
              className=" u-full-width"
              name="valueExpense"
              value={valueExpense}
              onChange={setState}
            ></input>
          </div>
          <input type="submit" className="button-primary u-full-width"></input>
        </form>
      </div>
      <div className="one-half column">
        <ListaExpenses
          listExpenses={listExpenses}
          expenses={expenses}
          ErrorData={ErrorData}
          EmptyData={EmptyData}
          validateExpenses={validateExpenses}
        />
        {validateExpenses === true ? (
          <Error message="sobrepaso presupuesto por: " value={expensesOver} />
        ) : (
          <div>
            <Alert budgetValue={budgetValue} remaining={remaining} />
          </div>
        )}
      </div>
    </div>
  );
};

Form.protoType = {
  budgetValue: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  expenses: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
};

export default Form;
