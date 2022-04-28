import React, { useState, useEffect } from "react"
import { getAllUsers, getLoggedInUserById } from "../../modules/UserManager"
import { UserCard } from "./UserCard"

// TODO delete this section if nothing is broken
// export const UserList = () => {
//     const [users, setUsers] = useState([])

//    const getUsers = () => {
//        getAllUsers().then((usersFromAPI) => {
//            setUsers(usersFromAPI)
//        })
//    }

//    useEffect(() => {
//        getUsers()
//    }, [])

//    return (
//        <>
//        <h2>Browse Members</h2>
//        <div className="container-cards">
//            {users.map((user) => (
//                <UserCard key={user.id} user={user} />
//            ))}
//        </div>
//        </>
//    )
// }

export const ShowLoggedInProfile = () => {
    const [user, setUser] = useState([])
    


    const getLoggedInUser = () => {
        getLoggedInUserById().then((userFromAPI) => {
            setUser(userFromAPI)
        })
    }

    useEffect(() => {
        getLoggedInUser()
    }, [])

    return (
        <>
            <div className="container-cards">                
                    <UserCard key={user.id} user={user} />
            </div>
        </>
    )
}



