import UserProvider from "./UserContext"

const { Children } = require("react")

const AppContext = () =>{

    return(
        <UserProvider>
            {Children}
        </UserProvider>
    )
}

export default AppContext