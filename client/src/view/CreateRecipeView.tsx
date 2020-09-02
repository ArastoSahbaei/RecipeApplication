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
            title <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} /> <br />
            duration<input></input> <br />
            ingrediens <input value={data.ingrediens} onChange={e => setData({ ...data, ingrediens: e.target.value })} /> <br />
            description <input value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /> <br />
            originCountry <input value={data.originCountry} onChange={e => setData({ ...data, originCountry: e.target.value })} /> <br />
            language <input value={data.language} onChange={e => setData({ ...data, language: e.target.value })} /> <br />
            <button onClick={() => service.createRecipe(data)}> Create Recipe </button>
        </div>
    )
}