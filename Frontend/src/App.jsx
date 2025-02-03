import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/driver-login' element={<DriverLogin />} />
        <Route path='/driver-signup' element={<DriverSignup />} />
      </Routes>
    </div>
    </>
  )
}

export default App