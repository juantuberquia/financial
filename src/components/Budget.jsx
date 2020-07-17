import React, { Fragment, useState } from "react";

const Budget = () => {
  const [budgetValue, setbudgetValue] = useState(0);

  const setStateBudget = (eventChange) => {
    setbudgetValue(eventChange.target.value);
  };

  const addBudget = (e) => {
    e.preventDefault();

    // validar que el vaor ingresado sea correcto

    // que havcer despues de eso
  };

  return (
    <Fragment>
      <div className="principal-content content">
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
      </div>
    </Fragment>
  );
};

export default Budget;
