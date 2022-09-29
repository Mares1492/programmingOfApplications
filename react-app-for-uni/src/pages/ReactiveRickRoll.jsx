import ShowCase from "../components/ShowCase"
import logo from "../logo.svg"
import { TextField } from "@mui/material"
import PopUp from "../components/PopUp"
import React, { useEffect, useState } from "react"
const timer = {
    color:"#bce8ff",
    backgroundColor:"#ff99c0",
}
const form = {
    borderRadius:"15% 100% 15% 100%",
    border:"3px solid rgba(143,61,90,0.3)"
}
export const ReactiveRickRoll = () => {
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
        <>
            <div style={timer}>{idleCount} seconds without being smart</div>
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
        </>
    )
}