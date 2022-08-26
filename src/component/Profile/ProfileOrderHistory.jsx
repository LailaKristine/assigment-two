import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ({words}) =>{

   const wordsHistory = words?.map((words,index) =>(
    <ProfileOrderHistoryItem key={index + "-" + words} words={words}/>
    ))
    return (
        <ul>{wordsHistory}</ul>
    )
}
export default ProfileOrderHistory