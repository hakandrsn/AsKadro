import React from 'react';
import About from './layout/About';
import Home from "./layout/Home"
import NavBar from "./layout/Navbar"
import LeftSide from "./layout/LeftSide"
import CompanyList from "./layout/CompanyList"
import "./App.css"
import { useEffect, useState } from 'react';
import axios from "axios"
import { ApiProvider } from '../context/ApiContext';

const App = () => {
  return (
    <ApiProvider>
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftSide />
          <div style={{height:"100%"}}>
            <CompanyList />
            <Home />
          </div>
        </div>
      </div>
    </ApiProvider>
  )

}

export default App;