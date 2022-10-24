import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/App"
import { DevSupport } from "@react-buddy/ide-toolbox"
import { ComponentPreviews, useInitial } from "./dev"
import { BrowserRouter } from "react-router-dom"
import ResponsiveAppBar from "./components/mui.garbage/ResponsiveAppBar"
import Store from "./store/store"
import Toggles from "./store/toggles"

const store = new Store()
const toggles = new Toggles()

export const UserContext = createContext({
    store
})
export const TogglesContext = createContext({
    toggles
})


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
        >
            <UserContext.Provider value={{ store }}>
                <TogglesContext.Provider value={{ toggles }}>
                    <ResponsiveAppBar />
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </TogglesContext.Provider>
            </UserContext.Provider>
        </DevSupport>
    </React.StrictMode>
)
