import React from "react"
import { Link, useHistory, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        clearUser()
        navigate("/login")
    }

    return (
        <>
            <section className="full-nav-container">
                <div className="nav-left">
                    <div className="logo__image-container">
                        <img
                            className="logo"
                            alt="Satellite of Love Logo"
                            src="/images/SOL-logo-with-text.png"
                        />
                    </div>
                </div>
                <div className="nav-right">
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
                        {isAuthenticated && (
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/friends">
                                    Friends
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
                                <span
                                    className="navbar__link"
                                    onClick={handleLogout}
                                >
                                    Logout
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
                </div>
            </section>
        </>
    )
}
