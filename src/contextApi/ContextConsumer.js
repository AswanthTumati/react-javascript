import React from 'react'
import { useUser } from './UserContext'

const ContextConsumer = () => {
    const {user, login, logout} = useUser();

  return (
    <div>
        {user?(<div>
            <p>{user.username}</p>
            <button onClick={logout}>Logout</button>
            </div>):(
            <div>
                <button onClick={()=>login('Aswanth Tumati')}>Login</button>
            </div>
        )}
    </div>
  )
}

export default ContextConsumer