import React from 'react'
import { useHistory } from "react-router-dom";

export const UserRecipesView = () => {
    const history = useHistory()
    const routeChange = () => {
        let path = `/create`;
        history.push(path);
    }

    return (
        <div>
            <h1>These are the users recipes:</h1>
            <button onClick={() => routeChange()}>Create New Recipe</button>
        </div>
    )
}
