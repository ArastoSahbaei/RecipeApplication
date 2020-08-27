import React, { useState } from 'react'
import service from '../shared/api/service/service'


export const FirstComponent = () => {
    const [data, setData] = useState("data.bio")
    return (
        <div>
            <button onClick={() => console.log(data)}>okok</button>
            <button onClick={() => service.getAllRecipes().then((response: any) => {
                setData(response)
            })}>
                FirstComponent</button>

        </div>
    )
}