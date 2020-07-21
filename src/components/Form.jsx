import React from "react";

const Form = () => {
  return (
    <div className="row">
      <div className="one-half column">
        <form>
          <h2>Agrega tus gastos aqui</h2>
          <div className="camp">
            <label> Nombre gastos</label>
            <input
              type="texto"
              placeholder="ejemplo arriendo.."
              className=" u-full-width"
            ></input>
          </div>
          <div className="camp">
            <label> Cantidad gastos</label>
            <input
              type="number"
              placeholder="ejemplo 200"
              className=" u-full-width"
            ></input>
          </div>
          <input type="submit" className="button-primary u-full-width"></input>
        </form>
      </div>
      <div className="one-half column">2</div>
    </div>
  );
};

export default Form;
