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

function Numbers(props) {
    return(
        <div>
            <p className={props.className}>{props.text}{props.number}</p>
        </div>
    )
}

Numbers.defaultProps = {
    text: '+'
}

Numbers.propTypes = {
    number: String // Boolean, Number
}

export default Numbers;