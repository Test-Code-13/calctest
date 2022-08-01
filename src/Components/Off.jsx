
import React, { useState } from "react";


function Off(props) {

    const [style, setStyle] = useState(props.style1)

    const onMouseOut = () => {
        setStyle(props.style1)
    }

    const clickMe = () => {

        setStyle(props.styleClicked)

        props.heading === "Emma's Calculator"? props.setHeading("Input Any Number"):
        props.setHeading("Emma's Calculator")
        props.setOutput('');
        props.setResult('');


        // if( props.heading === "Emma's Calculator") {
        //     props.setHeading("Input Any Number");
        // }
    }

    return(
        <button className={style} onClick={clickMe} onMouseOut={onMouseOut}>
            {props.text}
        </button>
    )
}

export default Off