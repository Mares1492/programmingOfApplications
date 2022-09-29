import React from "react"
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox"
import { PaletteTree } from "./palette"
import App from "../components/App"
import ShowCase from "../components/ShowCase"
import { NotMain } from "../pages/NotMain"

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
            <ComponentPreview path="/ShowCase">
                <ShowCase />
            </ComponentPreview>
            <ComponentPreview path="/NotMain">
                <NotMain />
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
