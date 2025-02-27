import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App_1 from './App_1.jsx'
import App_2 from './App_2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_2 />
  </StrictMode>,
)
