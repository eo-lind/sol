import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateProfile, getUserById } from "../../modules/UserManager"
import "./UserForms.css"

export const UserEditForm = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [user, setUser] = useState({
        name: "",
        email: "",
        profilePic: "",
        aboutMe: "",
        likes: "",
        dislikes: "",
        id: currentUser,
    })
    const [isLoading, setIsLoading] = useState(false)

    const { userId } = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...user }
        stateToChange[evt.target.id] = evt.target.value
        setUser(stateToChange)
    }

    const updateExistingUser = (evt) => {
        evt.preventDefault()
        setIsLoading(true)

        const editedUser = {
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
            aboutMe: user.aboutMe,
            likes: user.likes,
            dislikes: user.dislikes,
            id: user.id,
        }

        updateProfile(editedUser).then(() => navigate("/friends"))
    }

    useEffect(() => {
        getUserById(userId).then((user) => {
            setUser(user)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <form>
                <fieldset>
                    <div className="form-section">
                        <div className="form-section">
                            <label htmlFor="name">Name:</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                defaultValue={user.name}
                                required
                                autoFocus
                                onChange={handleFieldChange}
                                id="name"
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="inputEmail">Email address:</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                defaultValue={user.email}
                                required
                                onChange={handleFieldChange}
                                id="email"
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="inputProfilePic">
                                Profile Photo:
                            </label>
                            <br />
                            <input
                                type="text"
                                name="profilePic"
                                className="form-control"
                                defaultValue={user.profilePic}
                                required
                                onChange={handleFieldChange}
                                id="profilePic"
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="inputAboutMe">About Me:</label>
                            <br />
                            <textarea
                                id="aboutMe"
                                name="aboutMe"
                                rows="4"
                                cols="50"
                                onChange={handleFieldChange}
                                required
                                className="form-control"
                                value={user.aboutMe}
                            ></textarea>
                        </div>
                        <div className="form-section">
                            <label htmlFor="likes">Likes:</label>
                            <br />
                            <input
                                type="text"
                                name="likes"
                                className="form-control"
                                defaultValue={user.likes}
                                required
                                autoFocus
                                onChange={handleFieldChange}
                                id="likes"
                            />
                        </div>
                        <div className="form-section"></div>
                        <label htmlFor="dislikes">Dislikes:</label>
                        <br />
                        <input
                            type="text"
                            name="dislikes"
                            className="form-control"
                            defaultValue={user.dislikes}
                            required
                            autoFocus
                            onChange={handleFieldChange}
                            id="dislikes"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingUser}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
