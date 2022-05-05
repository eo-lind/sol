import React, { useState, useEffect } from "react"
import { getUserById, getAllUsers } from "../../modules/UserManager"
import {
    addFriend,
    getFriendsByCurrentUserId,
} from "../../modules/FriendManager"
import "./User.css"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const UserDetail = () => {
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
        getAllUsers()
            .then((usersFromApi) => {
                const applicableUsers = usersFromApi.filter((anyUser) => {
                    return (
                        anyUser.id !==
                        JSON.parse(sessionStorage.getItem("sol_user")).id
                    )
                })
                return applicableUsers
            })
            .then((applicableUsers) => {
                // creates empty array, loops through all non logged in users, then loops through all users who are already on the friends list - if a user object from the list of all non-logged in users has an id that doesn't match any users on the alreadyFriends objects, the non-loggged in user object is pushed into sorted arrays; state of "users" is declared as the user objects in the notAlreadyFriendsArray
                const notAlreadyFriendsArray = []
                for (let i = 0; i < applicableUsers.length; i++) {
                    const applicableUserObj = applicableUsers[i]
                    for (let n = 0; n < alreadyFriends.length; n++) {
                        const friendObj = alreadyFriends[n]
                        if (friendObj.userId !== applicableUserObj.id) {
                            notAlreadyFriendsArray.push(applicableUserObj)
                        }
                    }
                }
                setUsers(notAlreadyFriendsArray)
            })
    }

    useEffect(() => {
        getFriendList()
    }, [])

    // saves new friend to the db after Add is clicked, then goes back to FriendList

    const handleClickSaveFriend = (friendId) => {
        const friendObj = {
            userId: friendId,
            currentUserId: JSON.parse(sessionStorage.getItem("sol_user")).id,
        }
        addFriend(friendObj).then(() => navigate("/friends"))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const [user, setUser] = useState({ name: "" })

    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId).then((user) => {
            setUser(user)
        })
    }, [userId])

    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const profileSubject = user.id

    return (
        <section className="user-detail__card">
            <div className="user__image-container">
                <img
                    className="user__photo"
                    alt="a photo of a robot"
                    src={user.profilePic}
                />
            </div>
            <h3 className="user__name">{user.name}</h3>

            <div className="user__about">
                <strong>About me:</strong> {user.aboutMe}
            </div>
            <div className="user__likes">
                <strong>Likes:</strong> {user.likes}
            </div>
            <div className="user__dislikes">
                <strong>Dislikes:</strong> {user.dislikes}
            </div>
            <div className="user__button-container">
                {/* will only display Edit button if the current user is owner of the profile - if not, it will display the Add button */}
                {currentUser === profileSubject ? (
                    <>
                        <Link to={`/users/${user.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                handleClickSaveFriend(user.id)
                            }}
                        >
                            Add
                        </button>
                    </>
                )}
            </div>
        </section>
    )
}
