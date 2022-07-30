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
                <Numbers number="1" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="2" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="3" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="4" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="5" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="6" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="7" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="8" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
                <Numbers number="9" style1="individualNumber" styleClicked="individualNumber2" count={1}/>
            </div>

                <Numbers number="0" style1="zero" styleClicked="zero2"/>
            
       
        </div>
   );
}

export default App;