import React, { useState } from "react";
import Error from "./Error";
import Expenses from "./Expenses";
import shortid from "shortid";

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
  // validar los datos de los gastos ingresados

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

    console.log(listExpenses);

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
        <h2>Listado de gastos</h2>
        {ErrorData === false && EmptyData === false ? (
          <div>
            {listExpenses.map((i) => (
              <Expenses key={i.id} expenses={i} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
