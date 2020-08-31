import React, { useState } from 'react'
import service from '../shared/api/service/service'

const theData = {
    title: "arasto",
    duration: 5,
    ingrediens: "1337",
    description: "1918",
    originCountry: "Farsi",
    language: "sweden",
    views: 2342
}

export const FirstComponent = () => {
    const [data, setData] = useState("data.bio")
    return (
        <div>
            <button onClick={() => console.log(data)}>okok</button>
            <button onClick={() => service.getAllRecipes().then((response: any) => {
                setData(response)
            })}>
                GetMethod</button>

            <button onClick={() => service.createRecipe(theData)}> PostMethod</button>

        </div>
    )
}