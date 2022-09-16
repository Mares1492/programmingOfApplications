import {useEffect, useState} from "react";
import {Button} from "@mui/material";


const ShowCase = ({showing})=> {
    const [size,changeSize] = useState(0)
    const moveDown = () => size>0&&changeSize(e=>e-2)
    useEffect(()=>{
        size===10?showing(true):showing(false)
    },[size])
    return(
        <div style={{
            height:size+"vmin",
            width:"100%",
            backgroundColor:"peachpuff"
        }}>
            <Button onClick={()=>moveDown()}
                    variant="contained">↑</Button>
            <Button onClick={()=>{if(size<10)changeSize(e=>e+2)}}
                    variant="contained">↓</Button>
        </div>
    )
}

export default ShowCase