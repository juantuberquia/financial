import React, { Fragment } from "react";
import { analizeBudget } from "../helper";
import PropTypes from "prop-types";

const Alert = ({ budgetValue, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        <p> Presupuesto: {budgetValue} </p>
      </div>
      <div className={analizeBudget(budgetValue, remaining)}>
        <p> Restante: {remaining} </p>
      </div>
    </Fragment>
  );
};

Alert.propTypes = {
  budgetValue: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Alert;
