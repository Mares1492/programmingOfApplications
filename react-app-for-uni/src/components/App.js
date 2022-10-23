import "../App.css";
import React, { createContext, useState } from "react"
import { ReactiveRickRoll } from "../pages/ReactiveRickRoll";
import { Route, Routes, useLocation } from "react-router-dom";
import { NotMain } from "../pages/NotMain";
import { Main } from "../pages/Main";
import { SemiMain } from "../pages/SemiMain";
import { Todo } from "../pages/Todo"

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

export const UserContext = createContext(null)
export const ThemeContext = createContext(themes.light)

function App() {

    const[user,setUser] = useState({username:"Anon"});


    const location = useLocation()
    return (
        <div className="App">
            <ThemeContext.Provider value={themes.dark}>
                <UserContext.Provider value={user}>
                    <Routes location={location} key = {location.pathname}>
                        <Route path="/" element={<ReactiveRickRoll/>}/>
                        <Route path="/not-main" element={<NotMain />}/>
                        <Route path="/main" element={<Main />}/>
                        <Route path="/semi-main" element={<SemiMain />}/>
                        <Route path="/todo" element={<Todo />}/>
                    </Routes>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
