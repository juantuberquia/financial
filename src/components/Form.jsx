import React, { useState } from "react";
import Error from "./Error";
import Expenses from "./Expenses";
import uuid from "uuid/v4";

const Form = ({ budgetValue }) => {
  // // hooks gastos y presupuesto
  const [expenses, setExpenses] = useState({
    nameExpenses: "",
    valueExpense: "",
  });

  // alamacenar hooks
  const [listExpenses, setListExpenses] = useState([]);

  // hooks validar datos
  const [ErrorData, setErrorData] = useState();
  // hooks gastos valor vacio
  const [EmptyData, setEmptyData] = useState();

  const { nameExpenses, valueExpense } = expenses;

  const addExpenses = (e) => {
    e.preventDefault();

    // validaciones dato
    if (valueExpense < 0) {
      setErrorData(true);
      return;
    } else {
      setErrorData(false);
    }
    // validaciones
    if (isNaN(valueExpense) || valueExpense === 0) {
      setEmptyData(true);
      return;
    } else {
      setEmptyData(false);
    }

    expenses.id = uuid();
    setListExpenses([...listExpenses, expenses]);
  };

  function setState(event) {
    setExpenses({
      ...expenses,
      [event.target.name]: event.target.value,
    });
  }

  // let conta = 0;
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
        {listExpenses.map((i) => (
          <Expenses
            key={i.id}
            expenses={i}
            // deleteAppomt={deleteAppomt}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
