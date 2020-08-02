import React, { Fragment } from "react";
import Expenses from "./Expenses";
import PropTypes from "prop-types";

const ListaExpenses = ({
  listExpenses,
  ErrorData,
  EmptyData,
  validateExpenses,
}) => {
  return (
    <Fragment className="one-half column">
      <h2>Listado de gastos</h2>
      {ErrorData === false &&
      EmptyData === false &&
      validateExpenses === false ? (
        <div>
          {listExpenses.map((i) => (
            <Expenses key={i.id} expenses={i} />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

ListaExpenses.propTypes = {
  ErrorData: PropTypes.bool.isRequired,
  EmptyData: PropTypes.bool.isRequired,
  validateExpenses: PropTypes.bool.isRequired,
  expenses: PropTypes.object.isRequired,
};

export default ListaExpenses;
