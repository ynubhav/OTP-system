import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Send from './components/otpsend'
import Otp from './components/otpverify'
import Integratedotp from './components/integrated'

function App() {
  return(
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 '>
    <Integratedotp/>
    <Send/>
    <Otp/>
    </div>
    </>
  )
}

export default App
