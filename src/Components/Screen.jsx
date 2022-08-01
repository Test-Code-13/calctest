import React from "react";
import { useState } from "react"


function Screen(props) {


    // const [ count, setCount ] = useState(props.count);

    // const [ heading, setHeading ] = useState(props.heading);

    // const clickMe = () => {
    //     setCount(count+1);
    //     // setHeading("Input Any Button");
    //     // props.setOutput(1);
    // }

        
    return(
        <div className={props.className}>
        <p>{props.heading}</p>
        {/* <h1>{count}</h1> */}
        {/* <p>{props.output}</p> */}
        {/* <h2 className={props.result}>{props.output}</h2> */}
        {props.children}
        {/* <button onClick={clickMe}>
            Start
        </button> */}
        </div>
    )
}

// Screen.defaultProps = {
//     heading: "Emma's Calculator",
// }

export default Screen;