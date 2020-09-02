import React, { useState } from 'react'
import service from '../shared/api/service/service'
import { RecipeInterface } from '../shared/interface/RecipeInterface'

export const CreateRecipeView = () => {
    const [data, setData] = useState<RecipeInterface>({
        _id: "",
        title: "string",
        duration: 234,
        ingrediens: "string",
        description: "string",
        originCountry: "string",
        language: "string",
        views: 24334
    })

    return (
        <div>
            <h1>Create a new recipe</h1>
            title<input></input> <br />
            duration<input></input> <br />
            ingrediens<input></input> <br />
            description<input></input> <br />
            originCountry<input></input> <br />
            language<input></input> <br />
            <button onClick={() => service.createRecipe(data)}> PostMethod</button>
        </div>
    )
}