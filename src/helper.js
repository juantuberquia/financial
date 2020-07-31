// cmabia la clase dependiendo del valor de remaining
export const analizeBudget = (budget, remaining) => {
  let alertColor;

  if (budget / 4 > remaining) {
    alertColor = "alert alert-danger ";
  } else if (budget / 2 > remaining) {
    alertColor = "alert alert-warning";
  } else {
    alertColor = "alert alert-success";
  }
  return alertColor;
};
