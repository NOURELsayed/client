import React, { createContext, useState} from 'react';

const initialState={
    isAuthenticated : false,
    user:{
        username:'user@user.com',
        password:'user'
    }
}

export const AuthContext = createContext()



const AuthContextProvider = (props) => {
    const [auth,setAuth]= useState(initialState)
    const login =() => {
        setAuth({...auth, isAuthenticated :!auth.isAuthenticated})
        alert("you are logged in")
    }
    return (
        <AuthContext.Provider value={{...auth, login}}>
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;