import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import ProfileActions from "../Profile/ProfileActions"
import ProfileHeader from "../Profile/ProfileHeader"
import ProfileOrderHistory from "../Profile/ProfileOrderHistory"

const Profile = () => {

    const { user } = useUser();

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