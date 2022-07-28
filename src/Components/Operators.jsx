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
    return(
        <div>
            <p className={props.className}>{props.symbol}</p>
        </div>
    )
}

export default Operators;