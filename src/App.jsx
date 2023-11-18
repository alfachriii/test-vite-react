import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { person } from "./Author";

function App() {
  return (
    <div className="app">
      <Header className="header"/>
      <div className="container">
      <div>
        <h1>{person.nama}</h1>
      </div>
      <img src={person.pic} alt="" />
      </div>
    </div>
  );
}

export default App;
