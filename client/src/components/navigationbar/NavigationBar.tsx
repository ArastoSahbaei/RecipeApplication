import React, { useContext } from 'react'
import { SearchRecipe } from '../searchrecipe/SearchRecipe'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { Profile } from '../profile/Profile'
import './NavigationBar.css'

export const NavigationBar = () => {
    const history = useHistory()
    const [user, setUser] = useContext(UserContext)

    return (
        <div className="navigationBar">
            <span className="mondialChef" onClick={() => history.push(`/home`)}>Mondial Chef</span>
            <div className="searchBar">
                <SearchRecipe />
            </div>

            {
                user.auth
                    ? <div className="signIn"> <Profile /> </div>
                    : <span className="signIn" onClick={() => history.push(`/signin`)}> Sign in</span>
            }
        </div>
    )
}
