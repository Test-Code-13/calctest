

import React, {useState} from "react";
import "../app.css"

function Result(props) {

    // const [ result, setResult ] = useState(null);

    if(props.output === '0') {
        props.setResult(props.output);
    }

    return(
        <div>
            <h1 className={props.className}>{props.result}</h1>
        </div>
    )
}

export default Result;