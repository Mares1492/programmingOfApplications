const PopUp = ({ opened }) => (
    <h1
        style={{
            position: "absolute",
            zIndex: 1,
            cursor: "crosshair",
            color: "#ff844e"
        }}
        onClick={() => opened(prev => !prev)}
    >
        Never Gonna Give You Up
    </h1>
)

export default PopUp
