import React from 'react'
import { SearchRecipe } from '../searchrecipe/SearchRecipe'
import { useHistory } from 'react-router-dom';
import './NavigationBar.css'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBar">
            <SearchRecipe />
            <h1 onClick={() => history.push(`/home`)}>Mondial Chef</h1>
            <h4 onClick={() => history.push(`/signin`)}> Sign in</h4>
        </div>
    )
}
