import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";
import PopUp from "./PopUp";
import ShowCase from "./ShowCase";
import {TextField} from "@mui/material";


function App() {
    const [show,setShow] = useState(false)
    const [input, setInput] = useState("");
    return (
    <div className="App">
        <ShowCase showing={setShow}/>
      <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
          <TextField
              id="standard-basic"
              label="Smart input"
              variant="standard"
              placeholder="Type something smart"
              value={input}
              onChange={e=>setInput(e.target.value)}
          />
          <div id="me" className="intro-text">{input}</div>
          {show&&<PopUp opened={setShow}/>}
      </header>
    </div>
    );
}


export default App;
