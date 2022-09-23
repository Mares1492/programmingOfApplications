import React from "react"
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox"
import { PaletteTree } from "./palette"
import App from "../components/App"
import ShowCase from "../components/ShowCase"

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
            <ComponentPreview path="/ShowCase">
                <ShowCase />
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
