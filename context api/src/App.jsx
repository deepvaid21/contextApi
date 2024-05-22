
import './App.css'
// import ContextAccess from './Context/ContextAccess'
import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Signup from './Context/Signup'
import Profile from './Context/Profile'
import UserContext from './Context/UserContext'

function App() {


  return (
    <>
    
    <UserContextProvider >
      <Signup />
      <Profile />
    </UserContextProvider>
    
    
      me aa likh reya
    </>
  )
}

export default App
