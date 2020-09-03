import React, { useState } from 'react'
import service from '../shared/api/service/service'
import { RecipeInterface } from '../shared/interface/RecipeInterface'

export const CreateRecipeView = () => {
    const userId = "5f50cb550534c6129c4d8da5"
    const [data, setData] = useState<RecipeInterface>({
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
            title <input onChange={e => setData({ ...data, title: e.target.value })} /> <br />
            duration<input></input> <br />
            ingrediens <input onChange={e => setData({ ...data, ingrediens: e.target.value })} /> <br />
            description <input onChange={e => setData({ ...data, description: e.target.value })} /> <br />
            originCountry <input onChange={e => setData({ ...data, originCountry: e.target.value })} /> <br />
            language <input onChange={e => setData({ ...data, language: e.target.value })} /> <br />
            <button onClick={() => service.createRecipeByUserId(userId, data)}> Create Recipe </button>
        </div>
    )
}