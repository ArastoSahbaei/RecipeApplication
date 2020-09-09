import React, { useState } from 'react'
import UserService from '../shared/api/service/UserService'
import { useHistory } from "react-router-dom";

export const SignInView = () => {
    const [registeredUsername, setRegisteredUsername] = useState('')
    const [registeredPassword, setRegisteredPassword] = useState('')
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const history = useHistory();

    const registerNewUser = () => {
        UserService.registerNewUser({ username: "eoerk@ork.com", password: "lols" })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }

    const serverResponse = (serverResponse: any) => {
        console.log(serverResponse)
        localStorage.setItem('JWT', serverResponse.data.token)
        routeChange()
    }

    const login = () => {
        UserService.login({ username: "arrezz", password: "arrezz" })
            .then(response => serverResponse(response))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>Register</h1>
            <input placeholder="email" onChange={e => setRegisteredUsername(e.target.value)}></input>
            <input placeholder="password" onChange={e => setRegisteredPassword(e.target.value)}></input>
            <button onClick={() => registerNewUser()}>Register</button>
            <h1>Login</h1>
            <input placeholder="email" onChange={e => setLoginUsername(e.target.value)}></input>
            <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}></input>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}
