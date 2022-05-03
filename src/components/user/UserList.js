import React, { useState, useEffect } from "react"
import { getLoggedInUserById } from "../../modules/UserManager"
import { UserCard } from "./UserCard"

// gets to profile of the logged in user, sets that object as user, and displays the UserCard for that user (to be used in the Home view)
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
