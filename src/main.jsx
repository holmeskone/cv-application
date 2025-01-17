import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordion from './components/accordion.jsx'
import './index.css'
// import Input from './components/input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion
      title={'Personal Information'}
      inputCount={6}
      inputText ={['First Name', 'Last Name', 'Telephone', 'Email', 'Nationality', 'Socials']}
    /> 
    <Accordion
      title={'Languages'}
      inputCount={2}
      inputText ={['Languages', 'Level']}
    /> 
    <Accordion
      title={'About you'}
      inputCount={2}
      inputText ={['About you', 'How can you help the team?']}
    /> 
    <Accordion
      title={'Work Experience'}
      inputCount={6}
      inputText ={['Company Name', 'Position', 'Location', 'Start Month', 'End Month', 'Achievements']}
    /> 
    <Accordion
      title={'Education'}
      inputCount={3}
      inputText ={['University Name', 'Degree', 'Achievements']}
    /> 
    <Accordion
      title={'Skills, Tools and/or Interests'}
      inputCount={3}
      inputText ={['Skills', 'Tools', 'Interests']}
    /> 
    
  </StrictMode>,
)
