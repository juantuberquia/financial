import React from "react";
import Headering from "./components/Headering";
import Budget from "./components/Budget";
// import ListaExpenses from "./components/ListaExpenses";

function App() {
  return (
    <div className="container">
      <Headering />
      <Budget />
      {/* <ListaExpenses /> */}
    </div>
  );
}

export default App;
