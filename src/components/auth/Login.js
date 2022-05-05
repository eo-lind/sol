import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = ({ setAuthUser }) => {
    const email = useRef()
    const existDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then((res) => res.json())
            .then((user) => (user.length ? user[0] : false))
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck().then((exists) => {
            if (exists) {
                setAuthUser(exists)
                navigate("/")
            } else {
                existDialog.current.showModal()
            }
        })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button
                    className="button--close"
                    onClick={(e) => existDialog.current.close()}
                >
                    Close
                </button>
            </dialog>

            <section className="login--content">
                <form className="form--login" onSubmit={handleLogin}>
                    <section className="login--header-text">
                        <h2>Please sign in</h2>
                    </section>
                    <fieldset>
                        <div className="login-item">
                            <label htmlFor="inputEmail"> Email address </label>
                        </div>
                        <div className="login-item">
                            <input
                                ref={email}
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                required
                                autoFocus
                            />
                        </div>
                        <button type="submit">Sign in</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link
                    className="link__not__on__card"
                    id="register-link"
                    to="/register"
                >
                    Not a member yet?
                </Link>
            </section>
        </main>
    )
}
