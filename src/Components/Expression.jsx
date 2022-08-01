

import React from "react";
import "../app.css"

function Expression(props) {


    return(
        <div>
            <h1 className={props.className}>{props.output}</h1>
        </div>
    )
}

export default Expression;