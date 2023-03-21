import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Accordion from './component/Accordion';
import Card from './component/Card'
import Alert from './component/Alert'
import React, { useState } from 'react'


 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Routes,
   Link
 } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert(
      {
        msg: message,
        type: type
      })
    setInterval(() => {
      setAlert(null)
    }, 3000);
  }
  const clickfunc = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextOperator-DarkMode"
      // setInterval(() => {
      //   document.title = "TextOperator-change with time "
      // }, 2000 );
      // setInterval(() => {
      //   document.title = "TextOperator-amazing! "
      // }, 1500 );
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextOperator-LightMode"

    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <Router>
      <Navbar title="Navbar " Home=" Home " mode={mode} clickfunc={clickfunc} />
       <Routes>
        {/* /user --> compoent 
        /user/hme --> component2 */}
        <Route exact path="/about" element={ <Card />}/>
          
        <Route path="/" element={<TextForm  feedback="we never share your email-id" showAlert={showAlert} mode={mode} />} >
        
        </Route>
        </Routes>
      </Router>

      
      {/* <Accordion/> */}
     

    </>

  );
}

export default App;
