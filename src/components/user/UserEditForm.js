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
        userId: currentUser,
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
            userId: user.id,
        }

        updateProfile(editedUser).then(() => navigate("/users"))
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
                    <div className="formgrid">
                        <label htmlFor="review">About me</label>
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
