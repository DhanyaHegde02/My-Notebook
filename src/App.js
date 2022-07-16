import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./Context/notes/noteState";
import Alert from "./Component/Alert";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import {useState} from 'react'

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    
  }
  return (
     <div className="back">
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}></Alert>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login  showAlert={showAlert}/>}></Route>
              <Route path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
      </div>
   
  );
}

export default App;
