import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateProfile, getUserById } from "../../modules/UserManager"
import "./User.css"

export const ProfileEditForm = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        profilePic: "",
        aboutMe: "",
        likes: "",
        dislikes: "",
        userId: currentUser,
    })
    const [isLoading, setIsLoading] = useState(false)

    const { profileId } = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...profile }
        stateToChange[evt.target.id] = evt.target.value
        setProfile(stateToChange)
    }

    const updateExistingProfile = (evt) => {
        evt.preventDefault()
        setIsLoading(true)

        const editedProfile = {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            profilePic: profile.profilePic,
            aboutMe: profile.aboutMe,
            likes: profile.likes,
            dislikes: profile.dislikes,
            userId: profile.userId,
        }

        updateProfile(editedProfile).then(() => navigate("/profiles"))
    }

    useEffect(() => {
        getUserById(profileId).then((profile) => {
            setProfile(profile)
            setIsLoading(false)
        })
    }, [])
console.log(profile.name)
    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            placeholder={profile.name}
                            value={profile.name}
                        />
                    </div>

                    <div className="formgrid">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={profile.email}
                        />
                    </div>

                    <div className="formgrid">
                        <label htmlFor="email">Profile Photo URL</label>
                        <br />
                        <input
                            type="text"
                            id="profilePic"
                            name="profilePic"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={profile.profilePic}
                        />
                    </div>

                    <div className="formgrid">
                        <label htmlFor="email">About Me</label>
                        <br />
                        <textarea
                            id="aboutMe"
                            name="aboutMe"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={profile.aboutMe}
                        ></textarea>
                    </div>

                    <div className="formgrid">
                        <label htmlFor="likes">Likes</label>
                        <br />
                        <input
                            type="text"
                            id="likes"
                            name="likes"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={profile.likes}
                        />
                    </div>

                    <div className="formgrid">
                        <label htmlFor="email">Dislikes</label>
                        <br />
                        <input
                            type="text"
                            id="dislikes"
                            name="dislikes"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={profile.dislikes}
                        />
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingProfile}
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
