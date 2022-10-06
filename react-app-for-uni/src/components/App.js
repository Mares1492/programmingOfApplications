import "../App.css"
import React from "react"
import { ReactiveRickRoll } from "../pages/ReactiveRickRoll"
import { Route, Routes, useLocation } from "react-router-dom"
import { NotMain } from "../pages/NotMain"
import { Main } from "../pages/Main"
import { SemiMain } from "../pages/SemiMain"

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <Routes location={location} key = {location.pathname}>
                <Route path="/" element={<ReactiveRickRoll/>}/>
                <Route path="/not-main" element={<NotMain />}/>
                <Route path="/main" element={<Main />}/>
                <Route path="/semi-main" element={<SemiMain />}/>
            </Routes>
        </div>
    )
}

export default App
