const PopUp = ({opened})=>
    <h1
        style={{
            position:"absolute",
            zIndex:1,
            cursor:"crosshair",
            color:"antiquewhite"
        }}
        onClick={()=>opened(prev=>!prev)}
    >
        Too much effort
    </h1>

export default PopUp