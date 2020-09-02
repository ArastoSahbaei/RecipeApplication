import React, { useState } from 'react'
import service from '../shared/api/service/service'
import { useHistory } from "react-router-dom";

export const FirstComponent = () => {

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

            {/* <button onClick={() => service.updateRecipe("5f4a1766d386c816b8f17e2a", theData)}> UpdateMethod</button> */}
            <button onClick={() => routeChange()}>Create New Recipe</button>

        </div>
    )
}

