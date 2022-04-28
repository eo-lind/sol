// import { getFriendsByCurrentUserId, deleteFriend } from "../../modules/FriendManager"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { FriendCard } from "./FriendCard"

// export const FriendList = () => {
//     const [friends, setFriends] = useState([])

//     const navigate = useNavigate()

//     // gets friends associated with logged in users id (currentUserId) and sets state
//     const getFriends = () => {
//         getFriendsByCurrentUserId(
//             JSON.parse(sessionStorage.getItem("sol_user")).id
//         ).then((friendsFromApi) => {
//             setFriends(friendsFromApi)
//         })
//     }
//     useEffect(() => {
//         getFriends()
//     }, [])
    
//     // deletes a friend from logged in user's friend list and re-renders list without that friend
    // const handleDeleteFriend = (id) => {
    //     deleteFriend(id).then(() =>
    //         getFriends(() => { setFriends()}
    //             ))
    //         }

            
//     return (
//         <>
//             <section className="section-content">
//                 <button
//                     type="button"
//                     className="btn"
//                     onClick={() => {
//                         navigate("/friends/add")
//                     }}
//                 >
//                     Add Friends
//                 </button>
//             </section>
//             <div className="container-cards">
//                 {friends.map((friend) => {
//                     return (
//                         <FriendCard
//                             key={friend.id}
//                             friend={friend}
//                             handleDeleteFriend={handleDeleteFriend}
//                         />
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllUsers } from "../../modules/UserManager"
import { addFriend, getMyFriends, deleteFriend } from "../../modules/FriendManager"
import { findUser } from "../../modules/UserManager"
import { UserCard } from "./UserCard"
import { FriendCard } from "./FriendCard"
import "./User.css"

export const FriendList = ({ getLoggedInUser }) => {

    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [users, setUsers] = useState([])
    const [friends, setFriends] = useState([])
    const [userSearch, foundUser] = useState({
        name: "",
    })

    const navigate = useNavigate()

    // const getUsers = () => {
    //     return getAllUsers().then((usersFromAPI) => {
    //         setUsers(usersFromAPI)
    //     })
    // }

    const getAllMyFriends = (userId) => {
        getMyFriends(userId).then((myFriends) => {
            setFriends(myFriends)
            // console.log(friends)
        })
    }

    useEffect(() => {
        getAllMyFriends(currentUser)
    }, [])

    const findUsers = (name) => {
        findUser(name).then((user) => {
            setUsers(user)
            console.log(user)
        })
    }

    const handleClickSaveFriend = (id) => {
        //*doing the same thing I did in Articles. Creating an array of friend Id's
        let friendIdArr = []
        friends.forEach((friend) => {
            friendIdArr.push(friend.userId)
        })
        console.log(friendIdArr)
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
                addFriend(reverseFriend).then(() => navigate("/friends/"))
            )
        } else {
            window.alert(
                "Cannot add friend. You have tried to add yourself or an existing friend."
            )
        }
    }


    

    const handleDeleteFriend = (id) => {
        deleteFriend(id).then(() =>
            getMyFriends(() => {
                setFriends()
            })
        )
    }

    const controlInput = (event) => {
        const searchedUser = { ...userSearch }

        searchedUser[event.target.id] = event.target.value
        console.log("event", searchedUser)
        foundUser(searchedUser)
    }

    const handleSearch = () => {
        findUsers(userSearch.name)
    }

    // useEffect(() => {
    //   findUsers();
    // }, []);

    return (
        <>
            <section className="user-search">
                <div className="search_bar">
                    <label htmlFor="search_bar">Find friends</label>
                    <input type="text" id="name" onChange={controlInput} />
                    <button
                        type="button"
                        id="search_btn"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </section>

            <section className="column-container">
                <h2>My Friends</h2>
                <section className="my-friends-container">
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
                    <h2>All Users</h2>
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
            </section>
        </>
    )
}
