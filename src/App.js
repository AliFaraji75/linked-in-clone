import "./App.css";

import Login from "./components/Login";
import {  Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from './components/Home'

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route  path="/home" element={<> <Header/> <Home/> </>} />
         
      
      </Routes>
 
    </div>
  );
}

export default App;
