import React from "react";
import { useState } from "react";

import "../src/app.css"

import Operators from "./Components/Operators";
import Numbers from "./Components/Numbers";
import Screen from "./Components/Screen";
import CalcBody from "./Components/CalcBody";
import Off from "./Components/Off";


function App() {

    const [ output, setOutput ] = useState(0);

    const [ heading, setHeading ] = useState("Emma's Calculator");


    return(
        <div>
            <CalcBody className="calcBody" />
            <Screen className="screen" heading={heading} output={output}/>
            <Off className="off" text="OFF" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>

            <div className="operatorsOne">
                <Operators symbol="+" className="subOperators" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Operators symbol="-" className="subOperators" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
            </div>

            <div className="operatorsTwo">
                <Operators symbol="x" className="subOperatorsTwo" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Operators symbol="/" className="subOperatorsTwo" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
            </div>
            
                <Operators symbol="=" className="equal" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>

            <div className="numbers">
                <Numbers number={1} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={2} style1="individualNumber" styleClicked="individualNumber2"  output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={3} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={4}style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={5} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={6} style1="individualNumber" styleClicked="individualNumber2"  output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={7} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={8} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
                <Numbers number={9} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
            </div>

                <Numbers number={0} style1="zero" styleClicked="zero2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading}/>
            
       
        </div>
   );
}

export default App;