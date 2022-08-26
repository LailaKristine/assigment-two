import { Link, Navigate } from "react-router-dom"
import { orderClearHistory } from "../../api/order";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom"

const ProfileActions = () =>{

    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogoutClick = ( ) =>{
        if(window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
            navigate("/")
        }
    }

    const handleClearHistoryClick = async () =>{
        if(!window.confirm("Are you sure?\nThis can not be undone!")){
            return
        }

        const [ clearError ] = await orderClearHistory(user.id)

        if(clearError !== null){
            return
        }

        const updatedUser ={
            ...user,
            orders:[]
        }

        storageSave(STORAGE_KEY_USER,updatedUser)
        setUser(updatedUser)
    }

    return (
        <ul>
            <li><Link to="/orders"> Orders</Link></li>
            <li><button onClick={handleClearHistoryClick}>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions