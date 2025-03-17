import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'
import Home from './pages/Home'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/driver-login' element={<DriverLogin />} />
        <Route path='/driver-signup' element={<DriverSignup />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='user/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>} />
      </Routes>
    </div>
    </>
  )
}

export default App