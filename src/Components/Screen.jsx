import React from "react";
import { useState } from "react"


function Screen(props) {

    const [ count, setCount ] = useState(props.count);


    const clickMe = () => {
        setCount(count+1);

    }
        
    return(
        <div className={props.className}>
        <h1>{count}</h1>
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