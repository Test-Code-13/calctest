// import './app.css'

// function Operators() {
//     return(
//         <div>
//             <div className="equal">=</div>

//             <div className="operatorsOne">
//                 <div className="subOperators">+</div>
//                 <div className="subOperators">-</div>
//             </div>


//             <div className="operatorsTwo">
//                 <div className="subOperatorsTwo">x</div>
//                 <div className="subOperatorsTwo">/</div>
//             </div>

//         </div>
//     )
// }

// export default Operators;

import React, {useState} from "react";
import "../app.css"

function Operators(props) {

    const [ style, setStyle ] = useState(props.style1);

    const onMouseOut = () => {
        setStyle(props.style1)
    }

    const clickMe = () => {

        setStyle(props.styleClicked)

        props.setResult('');
       
        // slice works in array or strings
        const lastCh = String(props.output).slice(String(props.output).length-1, String(props.output).length);
        console.log(lastCh);

        if(lastCh !== '+' && lastCh !== '-' && lastCh !== '/' && lastCh !== '*') {
            props.setOutput(props.output + props.symbol);
        }

        // console.log(props.output.at[1]);
        
    
        if( props.heading === "Emma's Calculator") {
            props.setHeading("Input Any Number");
        }
    }

    return(
        <button className={style} onClick={clickMe} onMouseOut={onMouseOut}>
            <p>{props.symbol}</p>
        </button>
    )
}

export default Operators;