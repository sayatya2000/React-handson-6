import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Component/Home";
import Student from "./Component/Student";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
import DataContext from "./Component/Context";


function App() {
  const [data,setData]=useState([])
  return <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/student' element={<DataContext.Provider value={{entry:data,updateData:setData}}><Student/></DataContext.Provider >}></Route>
        <Route path="/add" element={<DataContext.Provider value={{entry:data,updateData:setData}}>
          <Add />
          
        </DataContext.Provider>} ></Route>
        <Route path="/edit" element={<DataContext.Provider value={{entry:data,updateData:setData}}>
          <Edit/>
        </DataContext.Provider>}></Route>

        
      </Routes>
      



    </BrowserRouter>
    

  </div>;
}

export default App;
