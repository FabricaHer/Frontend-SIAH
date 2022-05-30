import React from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";
import { TableContrato } from "./components/TableContrato/TableContrato";
const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <MainDash>
        	<Cards />
        	<RightSide />
        </MainDash>
        <TableContrato/>
      </div>
    </div>
  );
};

export default App;
