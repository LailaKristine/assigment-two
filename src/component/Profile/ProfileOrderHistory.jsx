import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ({orders=[]}) =>{

   const wordsHistory = orders?.map((word,index) =><ProfileOrderHistoryItem key={index + "-" + word} words={word}/>
    )
    return (
        <ul>{wordsHistory}</ul>
    )
}
export default ProfileOrderHistory