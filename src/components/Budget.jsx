import React, { Fragment, useState } from "react";
import Error from "../components/Error";
import Form from "../components/Form";

const Budget = () => {
  // hooks setear el valor ingresado
  const [budgetValue, setbudgetValue] = useState(0);
  // hooks error datos ingresados incorrectos
  const [ErrorData, setErrorData] = useState(false);
  // hooks bugget empty
  const [EmptyData, setEmptyData] = useState(false);
  // hooks gastos y presupuesto
  // const [expenses, setExpenses] = useState(0);
  // const [funds, setFunds] = useState(0);

  const setStateBudget = (eventChange) => {
    setbudgetValue(parseInt(eventChange.target.value));
  };

  const addBudget = (e) => {
    e.preventDefault();

    // validaciones valor ingresado
    if (budgetValue < 0) {
      setErrorData(true);
    } else {
      setErrorData(false);
    }

    if (isNaN(budgetValue) || budgetValue === 0) {
      setEmptyData(true);
    } else {
      setEmptyData(false);
    }
  };

  // setExpenses(budgetValue);
  // setFunds(budgetValue);

  return (
    <Fragment>
      <div className="principal-content content">
        {ErrorData === true ? (
          <Error message="Los datos ingresados incorrectos" />
        ) : null}

        {EmptyData === true ? <Error message="Favor ingresar datos" /> : null}

        <form onSubmit={addBudget}>
          <h2>Coloca tu Presupuesto</h2>
          <input
            type="number"
            placeholder="ingrese tu presupuesto"
            className="u-full-width"
            onChange={setStateBudget}
          ></input>
          <button type="submit" className="button-primary u-full-width">
            ingresar presupuesto
          </button>
        </form>
        <Form />
      </div>
    </Fragment>
  );
};

export default Budget;
