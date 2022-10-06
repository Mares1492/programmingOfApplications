
const hole= {
    clipPath:"circle(5% at 50% 50%)",
    backgroundColor:"black",
    width:"10%",
    height:"10%",
    zIndex:"4"}


export const Ball = () => {

    return (
        <div style={{clipPath:"circle(30% at 50% 50%)",
            position:"absolute",
            width:"40%",
            height:"40%",
            top:"80%",
            left:"45%",
            backgroundColor:"red",
            color:"red",
            zIndex:"3",
            display:"flex"
        }}>
            {/*Need a fix, coz not displaying*/}
            <div style={hole}>a</div>
            <div style={hole}>b</div>
            <div style={hole}>c</div>
        </div>
    )
}