// import './app.css'

// function Numbers() {
//     return(
//         <div>
//         <div className="numbers">
//             <div className="individualNumber">1</div>
//             <div className="individualNumber">2</div>
//             <div className="individualNumber">3</div>
//             <div className="individualNumber">4</div>
//             <div className="individualNumber">5</div>
//             <div className="individualNumber">6</div>
//             <div className="individualNumber">7</div>
//             <div className="individualNumber">8</div>
//             <div className="individualNumber">9</div>
//         </div>

//             <div className="zero">
//                 0
//             </div>
//         </div>
//     )
// }

// export default Numbers;

import React from "react";
import "../app.css"
import { useState } from "react";

// function Numbers(props) {

//     const [ className, setClassName ] = useState(props.className);

//     const clickNumber = () => {
//         setClassName(
//             props.className2
//             );
//     }

//     return(
//         <div>
//             <button className={props.className} onClick={clickNumber}>{props.number}</button>
//         </div>
//     )
// }

function Numbers(props) {

    const [ style, setStyle ] = useState(props.style1);

    const [ count, setCount ] = useState(props.count);


    const clickMe = () => {
        setCount(count+1);
        console.log(count)

    }

    const clickNumber = () => {
        setStyle(
            props.styleClicked
            );
    }

    return(
        <div>
            <button className={style} onClick={() => 
                {clickMe();
                 clickNumber();
                }}>{props.number}</button>
        </div>
    )
}


// Numbers.defaultProps = {
//     text: '+'
// }

Numbers.propTypes = {
    number: String // Boolean, Number
}

export default Numbers;

