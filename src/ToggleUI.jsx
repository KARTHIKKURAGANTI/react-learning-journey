import { useState } from "react";
import PredictionSimulator from "./PredictionSimulator";
import { Button } from "./Button";

function ToggleUI(){
    const [state,setState] = useState(false);
    const onFun = () => setState(true)
    const ofFun = () => setState(false)
    return (
        <>
         <Button bname="ON" fun={onFun}/><span></span><Button bname="OF" fun={ofFun}/>
         {state && <PredictionSimulator/>}
        </>
    );
}

export default ToggleUI