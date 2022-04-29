import React, { useState, useEffect } from "react"
import { getAllUsers, getLoggedInUserById } from "../../modules/UserManager"
import { UserCard } from "./UserCard"

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
