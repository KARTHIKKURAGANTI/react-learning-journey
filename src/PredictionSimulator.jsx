import { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
function PredictionSimulator(){
    const [state,setState]=useState(0)
    const accGenerator = () => {
        setState(Math.floor(Math.random() * 20) + 80);
    }
return (
    <>
    <h1>FAKE AI PREDICTOR</h1>
    <Button bname="Run Model" fun={accGenerator}/>
    {state>0 && (<Card title="Accuracy" value={`${state}%`}/>)}
    </>
);
}

export default PredictionSimulator