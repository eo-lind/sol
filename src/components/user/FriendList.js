import {
    getFriendsByCurrentUserId,
    deleteFriend,
} from "../../modules/FriendManager"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FriendCard } from "./FriendCard"

export const FriendList = () => {
    const [friends, setFriends] = useState([])

    const navigate = useNavigate()

    // gets friends associated with logged in users id (currentUserId) and sets state
    const getFriends = () => {
        getFriendsByCurrentUserId(
            JSON.parse(sessionStorage.getItem("sol_user")).id
        ).then((friendsFromApi) => {
            setFriends(friendsFromApi)
        })
    }
    useEffect(() => {
        getFriends()
    }, [])
    
    // deletes a friend from logged in user's friend list and re-renders list without that friend
    const handleDeleteFriend = (id) => {
        deleteFriend(id).then(() =>
            getFriends(() => { setFriends()}
                ))
            }

            
    return (
        <>
            <section className="section-content">
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        navigate("/friends/add")
                    }}
                >
                    Add Friends
                </button>
            </section>
            <div className="container-cards">
                {friends.map((friend) => {
                    return (
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                            handleDeleteFriend={handleDeleteFriend}
                        />
                    )
                })}
            </div>
        </>
    )
}