import React from "react"
import { Link } from "react-router-dom"
import "./User.css"

export const UserCard = ({ user, handleClickSaveFriend }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const profileSubject = user.id

    return (
        <section className="card">
            <div className="user__image-container">
                <img
                    className="user__photo"
                    alt="a photo of a robot"
                    src={user.profilePic}
                />
            </div>
            <h3 className="user__name">{user.name}</h3>
            <Link to={`/users/${user.id}`}>
                <button>Details</button>
            </Link>
            <div className="user__button-container">
                {/* will only display Edit button if the current user is owner of the profile - if not, it will display the Add button */}
                {currentUser === profileSubject ? (
                    <>
                        <Link to={`/users/${user.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                handleClickSaveFriend(user.id)
                            }}
                        >
                            Add
                        </button>
                    </>
                )}
            </div>
        </section>
    )
}
