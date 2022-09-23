import logo from "../logo.svg"
import "../App.css"
import {useState,useEffect} from "react"
import PopUp from "./PopUp"
import ShowCase from "./ShowCase"
import {TextField} from "@mui/material"

const timer = {
    color:"#bce8ff",
    backgroundColor:"#ff99c0",
}
const form = {
    borderRadius:"15% 100% 15% 100%",
    border:"3px solid rgba(143,61,90,0.3)"
}
function App() {
    const [show, setShow] = useState(false)
    const [input, setInput] = useState("")
    const [idleCount, setIdleCount] = useState(0)


    useEffect(()=>{
        setIdleCount(0)
        const interval = setInterval(() => {
            setIdleCount(e=>e+1)
        }, 1000);
        return () => clearInterval(interval);
    },[input])
    return (
        <div className="App">
            < div style={timer}>{idleCount} seconds without typing</div>
            <ShowCase style = {form} showing={setShow} />
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                <TextField
                    id="standard-basic"
                    label="Smart input"
                    variant="standard"
                    placeholder="Type something smart"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <div
                    id="me"
                    className="intro-text"
                >
                    {input}
                </div>
                {show && <PopUp opened={setShow} />}
            </header>
        </div>
    )
}

export default App
