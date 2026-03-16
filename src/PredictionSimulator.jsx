import { use, useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
function PredictionSimulator(){
    const [state,setState]=useState(0)
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        console.log("new prediction generated...");
    },[state]);

    const accGenerator = () => {
        setLoading(true);
        setTimeout(() => {
            setState(Math.floor(Math.random() * 20) + 80);
    },4000);
    }
return (
    <>
    <h1>FAKE AI PREDICTOR</h1>
    <Button bname="Run Model" fun={accGenerator}/>
    {loading && <p>Loading...</p> }
    {state>0 && (<Card title="Accuracy" value={`${state}%`}/>)}
    </>
);
}

export default PredictionSimulator
