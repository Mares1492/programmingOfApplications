import { Pin } from "../components/23.09.22/Pin"
import { Ball } from "../components/23.09.22/Ball"

const laneStyle ={
    clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)",
    backgroundColor:"black",
    width:"100%",
    border:"solid black 3px"
}

const initialPosition= [
    {top:"2%",left:"35%",width:"11%",height:"14%",number:"7"},
    {top:"2%",left:"41%",width:"11%",height:"14%",number:"8"},
    {top:"2%",left:"47%",width:"11%",height:"14%",number:"9"},
    {top:"2%",left:"53%",width:"11%",height:"14%",number:"10"},
    {top:"4%",left:"37%",width:"12%",height:"15%",number:"4"},
    {top:"4%",left:"43%",width:"12%",height:"15%",number:"5"},
    {top:"4%",left:"49%",width:"12%",height:"15%",number:"6"},
    {top:"6%",left:"39%",width:"13%",height:"16%",number:"2"},
    {top:"6%",left:"45%",width:"13%",height:"16%",number:"3"},
    {top:"8%",left:"42%",width:"14%",height:"17%",number:"1"}
    ]




export const SemiMain = () => {
    return (
        <>
            <div style={{zIndex:"2",fontSize:"xx-large",fontFamily:"sans-serif"}}>React Bowling mini game</div>
            <Ball/>
            {initialPosition.map(position=>
                <Pin
                    top={position.top}
                    left={position.left}
                    width={position.width}
                    height={position.height}
                />)}
            <div style={{display:"flex",width:"100vw",height:"80vh",justifyContent:"center"} }>
                <div style={laneStyle}></div>
            </div>
        </>
    )
}