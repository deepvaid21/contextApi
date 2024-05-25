import {useState,useContext} from 'react'
import UserContext from './UserContext'

function Signup() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser}=useContext(UserContext)
    const handlesubmitted=(e)=>{
        e.preventDefault()
        setUser({Username,Password})

    }
  return (
    <div>
      
      <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
      <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}}placeholder='password' />
      <button onClick={handlesubmitted}>submitted</button>
    </div>
  )
}

export default Signup
