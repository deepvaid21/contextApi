import {useContext} from 'react'
import UserContext from './UserContext'

function Profile() {
    const{User}=useContext(UserContext)
    if (!User) return <div> please login </div>
    return <div >welcome{User.Username}</div>
 
}

export default Profile
