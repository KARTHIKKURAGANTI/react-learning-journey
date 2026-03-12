import { useState } from "react";
import { Button } from "./Button";


export const Counter = () => {
    const [state,setCount] = useState(0);
    const inr = () => {setCount(state+1)}
    const dcr = () => {setCount(state=>(state>0?state-1:0))}
    const reset = () => {setCount(0)}
    return (
        <>
        <div>{state}</div>
        <Button bname="Increase" fun={inr}/><span></span><Button bname="Decrease" fun={dcr}/><span></span><Button bname="Reset" fun={reset}/>
        </>
    );

}