import { useEffect } from "react"
import { userById } from "../../api/user"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import { storageSave } from "../../utils/storage"
import ProfileActions from "../Profile/ProfileActions"
import ProfileHeader from "../Profile/ProfileHeader"
import ProfileOrderHistory from "../Profile/ProfileOrderHistory"

const Profile = () => {

    const { user, setUser}  = useUser();
    useEffect(() => {

        const findUser = async () =>{
            const [error, latestUser] = await userById(user.id)
            if(error === null){
                storageSave("user", latestUser)
                setUser(latestUser)
            }
        }
        findUser();

    },[ setUser, user ])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username}/>
            <ProfileActions/>
            <ProfileOrderHistory orders={ user.orders }/>
        </>
    )
}

export default withAuth(Profile)