import React from "react"
import { Link, useHistory, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        clearUser()
        navigate("/")
    }

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">
                    Home
                </Link>
            </li>
            {isAuthenticated && (
                <li className="navbar__item">
                    <Link className="navbar__link" to="/parties">
                        Watch Parties
                    </Link>
                </li>
            )}
            {isAuthenticated && (
                <li className="navbar__item">
                    <Link className="navbar__link" to="/reviews">
                        Movie Reviews
                    </Link>
                </li>
            )}
            {isAuthenticated && <li className="navbar__item">
                <Link className="navbar__link" to="/friends">
                    Friends
                </Link>
            </li>}
            {isAuthenticated && (
                <li className="navbar__item">
                    <Link className="navbar__link" to="/friends/add">
                        Browse Members
                    </Link>
                </li>
            )}
            {isAuthenticated && (
                <li className="navbar__item">
                    <Link className="navbar__link" to="/movies">
                        Browse Movies
                    </Link>
                </li>
            )}
            {isAuthenticated ? (
                <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}>
                        {" "}
                        Logout{" "}
                    </span>
                </li>
            ) : (
                <li className="navbar__item">
                    <Link className="navbar__link" to="/login">
                        Login
                    </Link>
                </li>
            )}
        </ul>
    )
}