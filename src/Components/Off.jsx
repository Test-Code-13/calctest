
function Off(props) {

    const clickMe = () => {
        props.heading === "Emma's Calculator"? props.setHeading("Input Any Number"):
        props.setHeading("Emma's Calculator")
        props.setOutput(props.text);

        // if( props.heading === "Emma's Calculator") {
        //     props.setHeading("Input Any Number");
        // }

    }
    return(
        <button className={props.className} onClick={clickMe}>
            {props.text}
        </button>
    )
}

export default Off