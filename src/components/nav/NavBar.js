import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">
                    Home
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/parties">
                    Watch Parties
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/reviews">
                    Movie Reviews
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/movies">
                    Browse Movies
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/users">
                    Browse Members
                </Link>
            </li>
        </ul>
    )
}