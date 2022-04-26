import { getAllUsers } from "../../modules/UserManager"
import { useNavigate } from "react-router-dom"
import { UserCard } from "./UserCard"
import { addFriend, getFriendsByCurrentUserId } from "../../modules/FriendManager"
import { useEffect, useState } from "react"

export const FriendForm = () => {
    const [users, setUsers] = useState([])
    const [alreadyFriends, setAlreadyFriends] = useState([])

    const navigate = useNavigate()

    const getFriendList = () => {
        getFriendsByCurrentUserId(
            JSON.parse(sessionStorage.getItem("sol_user")).id
        ).then((friendsFromApi) => {
            setAlreadyFriends(friendsFromApi)
        })
    }

    const getUsers = () => {
        getAllUsers().then((usersFromApi) => {
            const applicableUsers = usersFromApi.filter((i) => {
                return (
                    i.id !==
                    JSON.parse(sessionStorage.getItem("sol_user")).id
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
        addFriend(friendObj).then(getUsers())
    }

    useEffect(() => {
        getFriendList()
    }, [])

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
                    Go to friend list
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
