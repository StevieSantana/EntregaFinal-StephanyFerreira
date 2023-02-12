import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.modules.css";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import  ItemDetails  from "./components/ItemDetails";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"B I E N V E N I D E S"} />}
        />
        {/* <Route path='/category/:category' element={<ItemList/>}/>
        <Route path='/product/:id' element={< ItemDetails/>} /> */}

      </Routes>
    </>
  );
}

export default App;
