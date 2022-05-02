import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
    addFriend,
    getMyFriends,
    deleteFriend,
} from "../../modules/FriendManager"
import { findUser, getAllUsers } from "../../modules/UserManager"
import { UserCard } from "./UserCard"
import { FriendCard } from "./FriendCard"
import "./User.css"

export const FriendList = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [users, setUsers] = useState([])
    const [friends, setFriends] = useState([])
    const [userSearch, foundUser] = useState({
        name: "",
    })

    const navigate = useNavigate()

    const getAllMyFriends = (userId) => {
        getMyFriends(userId).then((myFriends) => {
            setFriends(myFriends)
        })
    }

    useEffect(() => {
        getAllMyFriends(currentUser)
    }, [])

    const findUsers = (name) => {
        findUser(name).then((user) => {
            setUsers(user)
        })
    }

    const handleClickSaveFriend = (id) => {
        let friendIdArr = []
        friends.forEach((friend) => {
            friendIdArr.push(friend.userId)
        })

        const newFriend = {
            userId: id,
            currentUserId: currentUser,
        }
        const reverseFriend = {
            userId: newFriend.currentUserId,
            currentUserId: newFriend.userId,
        }
        if (
            newFriend.userId !== newFriend.currentUserId &&
            newFriend.userId !==
                friendIdArr.find((element) => element === newFriend.userId)
        ) {
            addFriend(newFriend).then(() =>
                addFriend(reverseFriend).then(() => getAllMyFriends(currentUser).then((myFriends) => {
                    setFriends(myFriends)
                }))
            )
        } else {
            window.alert(
                "Cannot add friend. You have tried to add yourself or an existing friend."
            )
        }
    }

    // useEffect(() => {
    //     getAllMyFriends(currentUser)
    // }, [])

    const handleDeleteFriend = (id) => {
        deleteFriend(id).then(() =>
            getMyFriends(() => {
                setFriends().then(() => navigate("/friends"))
            })
        )
    }

    const controlInput = (event) => {
        const searchedUser = { ...userSearch }

        searchedUser[event.target.id] = event.target.value
        foundUser(searchedUser)
    }

    const handleSearch = () => {
        findUsers(userSearch.name)
    }

    return (
        <>
            <main className="column-container">
                <section className="my-friends-container">
                    <div className="column-header-friends">
                        <h2>My Friends</h2>
                    </div>
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
                </section>

                <section className="all-users-container">
                    <section className="user-search">
                        <div className="search_bar">
                            <label htmlFor="search_bar">Find people</label>
                            <br />
                            <input
                                type="text"
                                id="name"
                                onChange={controlInput}
                            />
                            <button
                                type="button"
                                id="search_btn"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </section>
                    <div className="container-cards">
                        {users.length > 0
                            ? users.map((user) => (
                                  <UserCard
                                      key={user.id}
                                      user={user}
                                      handleClickSaveFriend={
                                          handleClickSaveFriend
                                      }
                                  />
                              ))
                            : ""}
                    </div>
                </section>
            </main>
        </>
    )
}
