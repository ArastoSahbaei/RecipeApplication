import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import './Profile.css'

export const Profile = () => {
    const history = useHistory()
    const [user, setUser] = useContext(UserContext)

    const reDirect = (direction: string) => {
        history.push(direction)
    }

    const logout = () => {
        localStorage.removeItem('JWT')
        setUser({})
        history.push('/home')
    }

    return (
        <div>
            <div className="dropdown">
                <span>{user.id}</span>
                <div className="dropdown-content">
                    <a onClick={() => reDirect('./recipes')}>Recipes</a>
                    <a onClick={() => reDirect('./settings')}>Settings</a>
                    <hr />
                    <a onClick={() => logout()}>Logout</a>
                </div>
            </div>
        </div>
    )
}
