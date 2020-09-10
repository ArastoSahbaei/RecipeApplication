import React, { useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'

export const HomeView = () => {
    const [user, setUser] = useContext(UserContext)

    const parseJWT = (token: any) => {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const jwtToken = JSON.parse(window.atob(base64));
        setUser({ auth: true, id: jwtToken.id })
    }

    useEffect(() => {
        parseJWT(localStorage.getItem('JWT'))
        return () => { }
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}


