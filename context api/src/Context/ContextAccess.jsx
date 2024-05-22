import React from 'react'
import UserContextProvider from './UserContextProvider'

import Profile from './Profile'
import Signup from './Signup'

function ContextAccess() {
  return (
    <div>
      <UserContextProvider>
        <Signup />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default ContextAccess
