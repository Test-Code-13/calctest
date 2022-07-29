import React from "react";
import { useState } from "react"


function Screen(props) {

    const [ number, setNumber ] = useState(props.number);


    const clickMe = () => {
        setNumber(number);

    }
        
    return(
        <div className={props.className}>
        <h1>{number+1}</h1>
        <button onClick={clickMe}>
            Start
        </button>
        </div>
    )
}

// Screen.defaultProps = {
//     heading: "Emma's Calculator",
// }

export default Screen;