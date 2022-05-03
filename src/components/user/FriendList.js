import React, { useState, useEffect } from "react"
import {
    addFriend,
    getMyFriends,
    deleteFriend,
} from "../../modules/FriendManager"
import { findUser } from "../../modules/UserManager"
import { UserCard } from "./UserCard"
import { FriendCard } from "./FriendCard"
import "./User.css"

export const FriendList = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [users, setUsers] = useState([])
    const [friends, setFriends] = useState([])
    // sets state of user search as a key/value pair (intially the value is an empty string)
    const [userSearch, foundUser] = useState({
        name: "",
    })

    const getAllMyFriends = (userId) => {
        getMyFriends(userId).then((myFriends) => {
            setFriends(myFriends)
        })
    }

    useEffect(() => {
        getAllMyFriends(currentUser)
    }, [])

    // fetches user by searched name and sets that user object as the state of user
    const findUsers = (name) => {
        findUser(name).then((user) => {
            setUsers(user)
        })
    }

    const handleClickSaveFriend = (id) => {
        let alreadyFriendsIdArr = []

        // takes user ids from every friend object and puts them into alreadyFriendsIdArr
        friends.forEach((friend) => {
            alreadyFriendsIdArr.push(friend.userId)
        })

        // newFriend contains the key value pairs that will be added as a new friend of the logged in user in the db
        const newFriend = {
            userId: id,
            currentUserId: currentUser,
        }

        // reverse friend takes the ids from the above object and swaps them to create a mirror object, meaning that the logged in user also gets added as a friend on the newFriend's friend list
        const reverseFriend = {
            userId: newFriend.currentUserId,
            currentUserId: newFriend.userId,
        }

        // condition states that if the newFriend's userId is not equal to current users's id and the newFriend's user ID does not exist in the alreadyFriendsIdArray, the new friend will be added to the current user's friend list and vice versa; if both conditions are not met, user will be presented with a popup telling them they tried to add an existing friend
        if (
            newFriend.userId !== newFriend.currentUserId &&
            newFriend.userId !==
                alreadyFriendsIdArr.find(
                    (element) => element === newFriend.userId
                )
        ) {
            addFriend(newFriend).then(() =>
                addFriend(reverseFriend).then(() =>
                    getMyFriends(currentUser).then((myFriends) => {
                        setFriends(myFriends)
                    })
                )
            )
        } else {
            window.alert(
                "Cannot add friend. You have tried to add an existing friend."
            )
        }
    }

    const handleDeleteFriend = (id) => {
        deleteFriend(id).then(() =>
            getMyFriends(currentUser).then((myFriends) => {
                setFriends(myFriends)
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
