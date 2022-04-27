import { getAllUsers } from "../../modules/UserManager"
import { useNavigate } from "react-router-dom"
import { UserCard } from "./UserCard"
import { addFriend, getFriendsByCurrentUserId } from "../../modules/FriendManager"
import { useEffect, useState } from "react"

export const FriendForm = () => {
    const [users, setUsers] = useState([])
    const [alreadyFriends, setAlreadyFriends] = useState([])

    const navigate = useNavigate()

    // fetches logged in users friends and sets them as alreadyFriends
    const getFriendList = () => {
        getFriendsByCurrentUserId(
            JSON.parse(sessionStorage.getItem("sol_user")).id
        ).then((friendsFromApi) => {
            setAlreadyFriends(friendsFromApi)
        })
    }

    useEffect(() => {
        getFriendList()
    }, [])

    // fetches all users, filters out logged in user by id, then filters out alreadyFriends, and sets users as all users who aren't logged in user or already on logged in user's friends list
    const getUsers = () => {
        getAllUsers().then((usersFromApi) => {
            const applicableUsers = usersFromApi.filter((anyUser) => {
                return (
                    anyUser.id !== JSON.parse(sessionStorage.getItem("sol_user")).id
                )
            })

            const fullFilterList = applicableUsers.filter((i) => {
                return alreadyFriends.filter((x) => {
                    return x.userId !== i.id
                })
            })
            setUsers(fullFilterList)
        })
    }
    
    const handleClickSaveFriend = (friendId) => {
        const friendObj = {
            userId: friendId,
            currentUserId: JSON.parse(sessionStorage.getItem("sol_user"))
                .id,
        }
        addFriend(friendObj).then(() => navigate("/users"))
    }

    

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <section className="section-content">
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        navigate("/friends")
                    }}
                >
                    My Friends
                </button>
            </section>
            <section className="searchInput">
                <input type="text" placeholder="Search for a User"></input>
            </section>
            <div className="container-cards">
                {users.map((user) => {
                    return (
                        <UserCard
                            key={user.id}
                            user={user}
                            handleClickSaveFriend={handleClickSaveFriend}
                        />
                    )
                })}
            </div>
        </>
    )
}
