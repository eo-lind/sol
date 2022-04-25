import React, { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Sol.css"

export const Sol = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("sol_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("sol_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sol_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("sol_user") !== null)
      }

    return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews
            setAuthUser={setAuthUser}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}/>
    </>
    )
}