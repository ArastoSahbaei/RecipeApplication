import React, { useState } from 'react'
import axios from 'axios'
import UserService from '../shared/api/service/UserService'

export const SignInView = () => {
    const [registeredUsername, setRegisteredUsername] = useState('')
    const [registeredPassword, setRegisteredPassword] = useState('')
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const registerNewUser = () => {
        UserService.registerNewUser({ email: "eoerk@ork.com", password: "lols" })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const login = () => {
        UserService.login({ email: "eoerk@ork.com", password: " lols" })
            .then(response => console.log(response))
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
