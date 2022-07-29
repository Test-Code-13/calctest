import Operators from "./Components/Operators";
import Numbers from "./Components/Numbers";
import Screen from "./Components/Screen";
import CalcBody from "./Components/CalcBody";
import Off from "./Components/Off";

import "../src/app.css"
import React from "react";

function App() {
    return(
        <div>
            <CalcBody className="calcBody"/>
            <Screen className="screen" heading="Emma's Calculator" count={1}/>
            <Off className="off"/>

            <div className="operatorsOne">
                <Operators symbol="+" className="subOperators"/>
                <Operators symbol="-" className="subOperators"/>
            </div>

            <div className="operatorsTwo">
                <Operators symbol="x" className="subOperatorsTwo"/>
                <Operators symbol="/" className="subOperatorsTwo"/>
            </div>
            
                <Operators symbol="=" className="equal"/>

            <div className="numbers">
                <Numbers number="1" className="individualNumber"/>
                <Numbers number="2" className="individualNumber"/>
                <Numbers number="3" className="individualNumber"/>
                <Numbers number="4" className="individualNumber"/>
                <Numbers number="5" className="individualNumber"/>
                <Numbers number="6" className="individualNumber"/>
                <Numbers number="7" className="individualNumber"/>
                <Numbers number="8" className="individualNumber"/>
                <Numbers number="9" className="individualNumber"/>
            </div>

                <Numbers number="0" className="zero"/>
            
       
        </div>
   );
}

export default App;