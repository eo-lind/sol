import React from "react"
import { Link } from "react-router-dom"
import "./User.css"

// this is a child of Sol component

export const UserCard = ({ user, handleClickSaveFriend }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const profileSubject = user.id

      

    return (
        <section className="user">
            <div className="user__image-container">
                <img
                    className="user__photo"
                    alt="a photo of name"
                    src={user.profilePic}
                />
            </div>
            <h3 className="user__name">{user.name}</h3>
            <div className="user__about">
                <strong>About me:</strong> {user.aboutMe}
            </div>
            <div className="user__likes">
                <strong>Likes:</strong> {user.likes}
            </div>
            <div className="user__dislikes">
                <strong>Dislikes:</strong> {user.dislikes}
            </div>
            {currentUser === profileSubject ? (
                <>
                    <Link to={`/users/${user.id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </>
            ) : (
                ""
            )}
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    handleClickSaveFriend(user.id)
                }}
            >
                Save to friend list
            </button>
        </section>
    )
}
