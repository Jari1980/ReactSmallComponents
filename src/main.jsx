import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.jsx'
import InputDisplay from './InputDisplay.jsx'
import ListToggle from './ListToggle.jsx'
import Timer from './Timer.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter color="darkblue"/>
    <InputDisplay />
    <ListToggle />
    <Timer />
  </StrictMode>,
)


