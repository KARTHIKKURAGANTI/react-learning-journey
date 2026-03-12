import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header,Input,Title,Subtitle} from './HeroSection'
import { Button } from './Button'
import { Card } from './Card'




let Name="AI Model Performance Dashboard";
let SubName="Monitor accuracy, loss, and real-time predictions of your ML models.";
function App() {
  
  const handleUpload = () => {
    console.log("upload button handled successfully...");
  }
  const handlePredict = () => {
    console.log("predict button handled successfully...");
  }

  return (
    <>
    <div>
      <Header />   
      <Title name={Name}/>
      <Subtitle subname={SubName}/>
      <Input/> <br></br>
      <Button bname="upload" fun={handleUpload}/> <span> </span> <Button bname="predict" fun={handlePredict}/>
      <Card title="Accuracy" value={`${98.34}%`} status="success"/>
      <Card title="Loss" value={`${0.34}%`} status="success"/>
      <Card title="Predictions" value={`${120}%`} status="success"/>
    </div>
      
    </>
  );
}

export default App
