import {useEffect, useState} from "react"
import {Button} from "@mui/material"

const max = 40

const ShowCase = ({style, showing}) => {
    const [size, changeSize] = useState(0)
    const moveDown = () => size > 0 && changeSize(0)
    useEffect(() => {
        (size > max/2 &&size<max/1.5) ? showing(true) : showing(false)
    }, [size])
    return (
        <div
            style={{
                height: size + "vmin",
                width: "100%",
                backgroundImage: `url("https://i.ytimg.com/vi/xMHJGd3wwZk/maxresdefault.jpg")`,
                backgroundColor: "peachpuff",
                backgroundSize:"70%",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center",
                transition:"all 400ms"
            }}
        >
            <Button
                onClick={() => moveDown()}
                variant="contained"
            >
                ↑
            </Button>
            <Button
                onClick={() => {
                    if (size < max) changeSize(e => e + 7)
                }}
                variant="contained"
            >
                ↓
            </Button>
        </div>
    )
}

export default ShowCase
