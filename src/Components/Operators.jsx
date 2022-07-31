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

import React from "react";
import "../app.css"

function Operators(props) {

    const clickMe = () => {
        props.setOutput(props.symbol);

        if( props.heading === "Emma's Calculator") {
            props.setHeading("Input Any Number");
        }
    }

    return(
        <button className={props.className} onClick={clickMe}>
            <p>{props.symbol}</p>
        </button>
    )
}

export default Operators;