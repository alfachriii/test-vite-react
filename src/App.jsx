import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { person } from "./Author";

function App() {
  return (
    <>
      <Header className="header"/>
      <div>
        <h1>{person.nama}</h1>
      </div>
      <img src={person.pic} alt="" />
    </>
  );
}

export default App;
