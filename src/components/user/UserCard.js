import React from "react"
import "./User.css"

// this is a child of Sol component

export const UserCard = () => (
    <section className="user">
        <div className="user__image-container">
            <img className="user__photo" alt="a photo of name" src="#" />
        </div>
        <h3 className="user__name">Some Name</h3>
        <div className="user__about">About: some stuff</div>
        <div className="user__likes">Likes: some stuff</div>
        <div className="user__dislikes">Dislikes: some stuff</div>
    </section>
)