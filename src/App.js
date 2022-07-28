import CalcBody from "./CalcBody";
import Operators from "./Operators";
import Numbers from "./Numbers";
import Screen from "./Screen";
import Off from "./Off"

function App() {
    return(
        <div>
            <CalcBody/>
                <Screen/>
                <Numbers/>
                <Operators/>
                <Off/>
        </div>
   );
}

export default App;