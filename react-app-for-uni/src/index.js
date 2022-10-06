import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/App"
import { DevSupport } from "@react-buddy/ide-toolbox"
import { ComponentPreviews, useInitial } from "./dev"
import { BrowserRouter } from "react-router-dom"
import ResponsiveAppBar from "./components/23.09.22/ResponsiveAppBar"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
        >
            <ResponsiveAppBar/>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </DevSupport>
    </React.StrictMode>
)
