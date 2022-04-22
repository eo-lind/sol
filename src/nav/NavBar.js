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
            {/* TODO later: */}
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/friends">
                    Friends
                </Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/users">
                    SOL Members
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
        </ul>
    )
}
