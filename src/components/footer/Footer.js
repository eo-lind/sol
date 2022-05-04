import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {

        return (
            <>
                <div className="footer-container">
                    <p className="footer-text">
                        &copy;2022{" "}
                        <a href="https://github.com/eo-lind" target="_blank">
                            Olivia Lind
                        </a>
                    </p>
                </div>
            </>
        )
}