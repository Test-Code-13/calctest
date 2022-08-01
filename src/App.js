import React from "react";
import { useState } from "react";

import "../src/app.css"

import Operators from "./Components/Operators";
import Numbers from "./Components/Numbers";
import Screen from "./Components/Screen";
import CalcBody from "./Components/CalcBody";
import Off from "./Components/Off";
import Equals from "./Components/Equals";
import Result from "./Components/Result";
import Expression from "./Components/Expression";


function App() {

    const [ output, setOutput ] = useState('');

    const [ heading, setHeading ] = useState("Emma's Calculator");

    const [ result, setResult ] = useState('');


    return(
        <div>
            <CalcBody className="calcBody" />
            <Screen className="screen" heading={heading} output={output}>
                <Result className="result" result={result}/>
                <Expression className="expression" output={output}/>
            </Screen>

            <Off text="OFF" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} style1="off" styleClicked="off2" result={result} setResult={setResult}/>

            <div className="operatorsOne">
                <Operators symbol="+" style1="subOperators" styleClicked="subOperatorsClicked" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Operators symbol="-" style1="subOperators" styleClicked="subOperatorsClicked" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
            </div>

            <div className="operatorsTwo">
                <Operators symbol="*" style1="subOperatorsTwo" styleClicked="subOperatorsTwoClicked" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Operators symbol="/" style1="subOperatorsTwo" styleClicked="subOperatorsTwoClicked" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
            </div>
            
                <Equals symbol="=" style1="equal" styleClicked="equal2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>

            <div className="numbers">
                <Numbers number={1} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={2} style1="individualNumber" styleClicked="individualNumber2"  output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={3} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={4}style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={5} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={6} style1="individualNumber" styleClicked="individualNumber2"  output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={7} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={8} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
                <Numbers number={9} style1="individualNumber" styleClicked="individualNumber2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
            </div>

                <Numbers number={0} style1="zero" styleClicked="zero2" output={output} setOutput={setOutput} heading={heading} setHeading={setHeading} result={result} setResult={setResult}/>
            
       
        </div>
   );
}

export default App;