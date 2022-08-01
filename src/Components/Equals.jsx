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

function Equals(props) {

    // const clickMe = () => {

        const [ style, setStyle ] = useState(props.style1);

        const onMouseOut = () => {
            setStyle(props.style1)
        }
       
        const equalsHandler = () => {

            setStyle(props.styleClicked)

            // takes mathematical expression in form a string & evaluates it
            // props.setOutput(eval(props.output));
            
            // props.output = '0';
            
            // props.setOutput('');
            props.setResult(eval(props.output));


            if( props.heading === "Emma's Calculator") {
                props.setHeading("Input Any Number");
            }
        }
        
    
      
    // }

    return(
        <button className={style} onClick={equalsHandler} onMouseOut={onMouseOut}>
            <p>{props.symbol}</p>
        </button>
    )
}

export default Equals;