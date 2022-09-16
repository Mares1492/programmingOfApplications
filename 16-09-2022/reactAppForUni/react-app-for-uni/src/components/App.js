import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";
import PopUp from "./PopUp";
import ShowCase from "./ShowCase";


function App() {
    const [show,setShow] = useState(false)
    return (
    <div className="App">
        <ShowCase showing={setShow}/>
      <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
          <div id="me" className="intro-text">I am here</div>
          {show&&<PopUp opened={setShow}/>}
      </header>
    </div>
    );
}


export default App;
