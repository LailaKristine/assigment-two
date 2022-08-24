import { createContext, userContext, useState } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageRead } from "../const/storage"



const UserContext = createContext()

export const useUser = () => {
    return userContext(UserContext)
}

//Provider  -> managing state
const UserProvider = ({children}) => {

    const[user, setUser ] = useState(storageRead(STORAGE_KEY_USER)) 

    const state  = {
        user, 
        setUser
    }

    return (
        <UserContext.Provider value ={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider