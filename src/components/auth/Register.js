import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = ({setAuthUser}) => {
    const name = useRef()
    const email = useRef()
    const profilePic = useRef()
    const aboutMe = useRef()
    const likes = useRef()
    const dislikes = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: name.current.value,
                            profilePic: profilePic.current.value,
                            aboutMe: aboutMe.current.value,
                            likes: likes.current.value,
                            dislikes: dislikes.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                //setAuthUser(createdUser)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button
                    className="button--close"
                    onClick={(e) => conflictDialog.current.close()}
                >
                    Close
                </button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register for SOL</h1>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input
                        ref={name}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        required
                        autoFocus
                    />
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        ref={email}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                    />
                    <label htmlFor="inputProfilePic">Profile Photo</label>
                    <input
                        ref={profilePic}
                        type="text"
                        name="profilePic"
                        className="form-control"
                        placeholder="URL of your profile photo"
                        required
                    />
                    <label htmlFor="aboutMe">About Me</label>
                    <br />
                    <textarea
                        id="aboutMe"
                        name="aboutMe"
                        rows="4"
                        cols="50"
                        required
                        autoFocus
                        className="form-control"
                        ref={aboutMe}
                    ></textarea>
                    <label htmlFor="likes">Likes</label>
                    <input
                        ref={likes}
                        type="text"
                        name="likes"
                        className="form-control"
                        placeholder="Things I like"
                        required
                        autoFocus
                    />
                    <label htmlFor="dislikes">Dislikes</label>
                    <input
                        ref={dislikes}
                        type="text"
                        name="dislikes"
                        className="form-control"
                        placeholder="Things I dislike"
                        required
                        autoFocus
                    />
                    <button type="submit">Sign in</button>
                </fieldset>
            </form>
        </main>
    )
}

