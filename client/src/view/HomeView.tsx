import React, { useState } from 'react'
import service from '../shared/api/service/service'
import { useHistory } from "react-router-dom";

export const HomeView = () => {

    const routeChange = () => {
        let path = `/create`;
        history.push(path);
    }

    const history = useHistory();
    const [data, setData] = useState("data.bio")
    return (
        <div>
            <button onClick={() => console.log(data)}>okok</button>
            <button onClick={() => service.getAllRecipes().then((response: any) => {
                setData(response)
            })}>
                GetMethod</button>
            <button onClick={() => routeChange()}>Create New Recipe</button>

        </div>
    )
}

