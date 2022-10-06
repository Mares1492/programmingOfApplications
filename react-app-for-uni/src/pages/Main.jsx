
export const Main = () => {
    return (
        <>
            <div style={{backgroundColor:"white",height:"2vh",width:"99vw"}}></div>
            <div style={{
                position:"absolute",
                top:"30%",
                left:"40%",
                backgroundImage:`url("https://i.ibb.co/gMpxj0w/rose.png")`,
                width:"20%",
                height:"40%",
                color:"white",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                opacity: "0.1"
            }}></div>
            <div style={{height:"91vh",width:"100%",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",zIndex:1}}>
                <div style={{ fontFamily:"script",color:"black",fontSize:"xxx-large",textShadow:"#ff0100 1em 1em 6em"}}>Blood</div>
                <div style={{ fontFamily:"script",color:"black",fontSize:"xxx-large",textShadow:"#ff0100 4em 1em 2em"}}>For</div>
                <div style={{ fontFamily:"script",color:"darkred",filter:"blur(0.1rem)",fontSize:"xxx-large",textShadow:"#ff0100 2em 4em 3em"}}>Blood</div>
                <div style={{ fontFamily:"script",color:"black",fontSize:"xxx-large",textShadow:"#ff0100 -10em -3em 4em"}}>The</div>
                <div style={{ fontFamily:"script",color:"black",fontSize:"xxx-large",textShadow:"#ff0100 0em -2em 4em"}}>Blood</div>
                <div style={{ fontFamily:"script",color:"black",fontSize:"xxx-large",textShadow:"#ff0100 1em 2em 5em"}}>God</div>
            </div>
        </>
    )
}