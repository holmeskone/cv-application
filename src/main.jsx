import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordion from './components/accordion.jsx'
import './index.css'
// import Input from './components/input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion
      title={'Personal Information'}
      inputCount={2}
      inputText ={['First Name', 'Last Name', ]}
    /> 
  </StrictMode>,
)
