import React, { useState, createContext } from 'react';

const any: any = []
export const UserContext = createContext(any);

export const UserProvider = (props: any) => {
    const [user, setUser] = useState([]);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}