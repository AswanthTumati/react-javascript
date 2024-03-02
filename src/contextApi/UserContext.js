import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children})=>{
    const [user, setUser] = useState();

    const login = (username)=>{
        setUser({username})
    }
    const logout = () =>{
        setUser(null);
    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () =>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error('context must be used with in a UserProvider')
    }
    return context;
}

export {useUser, UserProvider};