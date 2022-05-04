import React, { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/Footer"
import { ApplicationViews } from "./ApplicationViews"
import "./Sol.css"

export const Sol = () => {
    // checks to see if there is a logged in user in session storage, and so long as there is, it will set isAuthenticated
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem("sol_user") !== null
    )

    // sets isAuthenticated to current user (from session storage)
    const setAuthUser = (user) => {
        sessionStorage.setItem("sol_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sol_user") !== null)
    }

    // clears session storage (for logout)
    const clearUser = () => {
        sessionStorage.clear()
        setIsAuthenticated(sessionStorage.getItem("sol_user") !== null)
    }

    // return statement will render NavBar component and ApplicationViews component
    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <Footer />
        </>
    )
}
