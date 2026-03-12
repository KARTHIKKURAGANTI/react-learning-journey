import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Counter } from './Counter.jsx'
import PredictionSimulator from './PredictionSimulator.jsx'
import ToggleUI from './ToggleUI.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleUI/>
  </StrictMode>
)
