import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export const RecipeView = () => {
    const history = useHistory();
    const [data, setData] = useState()

    useEffect(() => {
        setData(history?.location?.state)
        return () => { }
    }, [history?.location?.state])

    return (
        <div>
            <h1>Displaying Recipe: {data?._id}</h1>
        </div>
    )
}
