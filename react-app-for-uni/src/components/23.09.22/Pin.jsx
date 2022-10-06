
export const Pin = ({top,left,width,height,number}) => {
    return (
        <div style={{
            clipPath: "polygon(42% 14%, 44% 7%, 51% 5%, 57% 7%, 59% 16%, 56% 30%, 66% 64%, 66% 88%, 50% 93%, 34% 89%, 34% 64%, 45% 30%)",
            border:"solid red 3px",
            backgroundColor:"orange",
            minWidth:width,
            minHeight:height,
            position:"absolute",
            top:top,
            left:left,
            zIndex:"1"
        }}>
            <div style={{color:"darkgrey"}}>{number}</div>
        </div>
    )
}