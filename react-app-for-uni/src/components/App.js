import "../App.css";
import React, { createContext, useContext, useEffect, useState } from "react"
import { ReactiveRickRoll } from "../pages/ReactiveRickRoll";
import { Route, Routes, useLocation } from "react-router-dom";
import { NotMain } from "../pages/NotMain";
import { Main } from "../pages/Main";
import { SemiMain } from "../pages/SemiMain";
import { Todo } from "../pages/Todo"
import { TogglesContext, UserContext } from "../index"
import { LoginForm } from "./LoginForm"
import AlertDialog from "./mui.garbage/AlertDialog"
import { observer } from "mobx-react-lite"

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};


export const ThemeContext = createContext(themes.light)

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <ThemeContext.Provider value={themes.dark}>
                <AlertDialog/>
                <LoginForm/>
                    <Routes location={location} key = {location.pathname}>
                        <Route path="/" element={<ReactiveRickRoll/>}/>
                        <Route path="/not-main" element={<NotMain />}/>
                        <Route path="/main" element={<Main />}/>
                        <Route path="/semi-main" element={<SemiMain />}/>
                        <Route path="/todo" element={<Todo />}/>
                    </Routes>
            </ThemeContext.Provider>
        </div>
    )
}

export default observer(App)
