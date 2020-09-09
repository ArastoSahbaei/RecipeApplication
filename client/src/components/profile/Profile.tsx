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

    return (
        <div>
            <div className="dropdown">
                <span>{user.id}</span>
                <div className="dropdown-content">
                    <a onClick={() => reDirect('./home')}>My recipes</a>
                    <a onClick={() => reDirect('./home')}>Settings</a>
                    <hr />
                    <a onClick={() => reDirect('./home')}>Logout</a>
                </div>
            </div>
        </div>
    )
}
