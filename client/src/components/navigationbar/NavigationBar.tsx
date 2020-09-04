import React from 'react'
import { SearchRecipe } from '../searchrecipe/SearchRecipe'
import { useHistory } from 'react-router-dom';
import './NavigationBar.css'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBar">
            <span className="mondialChef" onClick={() => history.push(`/home`)}>Mondial Chef</span>
            <div className="searchBar">
                <SearchRecipe />
            </div>
            <span className="signIn" onClick={() => history.push(`/signin`)}> Sign in</span>
        </div>
    )
}
