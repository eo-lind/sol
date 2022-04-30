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

    
    const getUsers = () => {
        // gets all users, filters out logged in user, returns all users except logged in user
        getAllUsers().then((usersFromApi) => {
            const applicableUsers = usersFromApi.filter((anyUser) => {
                return (
                    anyUser.id !== JSON.parse(sessionStorage.getItem("sol_user")).id
                )
            })
             return applicableUsers

        }).then((applicableUsers) => {
            // creates empty array, loops through all non logged in users, then loops through all users who are already on the friends list - if a user object from the list of all non-logged in users has an id that doesn't match any users on the alreadyFriends objects, the non-loggged in user object is pushed into sorted arrays; state of "users" is declared as the user objects in the sortedArray
            const sortedArray = []
            for (let i = 0; i < applicableUsers.length; i++) {
                const applicableUserObj = applicableUsers[i];
                for (let n = 0; n < alreadyFriends.length; n++) {
                    const friendObj = alreadyFriends[n];
                    if (friendObj.userId !== applicableUserObj.id) {
                        sortedArray.push(applicableUserObj)
                    }
                }
            }
            setUsers(sortedArray)
        })
    }


useEffect(() => {
    getFriendList()
}, [])
    
    const handleClickSaveFriend = (friendId) => {
        const friendObj = {
            userId: friendId,
            currentUserId: JSON.parse(sessionStorage.getItem("sol_user"))
                .id,
        }
        addFriend(friendObj).then(() => navigate("/friends"))
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
            {/* <section className="searchInput">
                <input type="text" placeholder="Search for a User"></input>
            </section> */}
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
