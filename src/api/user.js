import { createHeaders} from  './index'
const apiURL = process.env.REACT_APP_API_URL

const checkForUser = async () =>{
    try{
        const response = fetch(`${apiURL}username=${username}`)
        if(!response.ok){
            throw new Error(`Could not complete request.`)
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [error.message, data]

    }
}

const createUser = async (username) =>{
    try{
        const response = fetch(apiURL,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                orders: []
            })  
        })
        if(!response.ok){
            throw new Error(`Could not create user with username ` + username)
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [error.message, []]

    }

}

export const loginUser = async (username) =>{
    const[checkError, user] = await  checkForUser(username);

    if(checkError !== null){
        return[checkError, null]
    }

    if(user.length > 0 )
    {
        return [null, user.pop()]
    }

    const[createError, newUser] = createUser(username);
}

[error, user]