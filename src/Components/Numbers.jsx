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

    // const initialState = ();

        // if (props.result !== '') {
        //    props.SetOutput(initialState);
   
        //     }

    const [ style, setStyle ] = useState(props.style1);

    const onMouseOut = () => {

        // style === "individualNumber"? setStyle(props.styleClicked):
        setStyle(props.style1);

    }

    const clickNumber = () => {



        setStyle(props.styleClicked);


        // makes number into variable

        // console.log(props.output);
        

        props.setResult('');

        props.setOutput(`${props.output}`+`${props.number}`);




        if( props.heading === "Emma's Calculator") {
            props.setHeading("Input Any Number");
        }
        
    //     if( style === "individualNumber") {
    //     setStyle(
    //         props.styleClicked
    //         );
    // } else {
    //     setStyle(props.style1);
    // }
}


    return(
        <div>
            <button className={style} 
            onClick={
                 clickNumber
                }
            onMouseOut={
                onMouseOut
            }
                >{props.number}</button>
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

