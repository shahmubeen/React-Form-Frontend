import React, { createContext, useState } from 'react';

const Data = createContext();

export default function AuthContext({children}) {

    let [auth, setAuth] =  useState(false);
    let [users, setUsers] = useState([]);
    const backendAPI = "http://localhost:5000"

  return (
    <div>
        <Data.Provider value={{auth, setAuth, users, setUsers, backendAPI}}>
            {children}
        </Data.Provider>
    </div>
  )
}

export {Data};