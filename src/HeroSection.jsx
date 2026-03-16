import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Header(){
    useEffect(() => {
            window.alert("AI DAHBOARD LOADED SUCCESSFULLY...");
        },[]);
    return (
        <>
        <h1>AIML DASHBOARD</h1>
        <p>upload your dataset and predict your results</p>
        </>
    )
}
export function Input(){
    return (
        <>
        <input placeholder="upload here..."></input>
        </>
    )
}

export const Title = ({name}) => { 
    return (
        <h2>{name}</h2>
    );
}

export const Subtitle = (props) => { 
    return (
        <h4>{props.subname}</h4>
    );
}


