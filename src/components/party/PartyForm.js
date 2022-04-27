import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addParty } from "../../modules/PartyManager"
import { getAllMovies } from "../../modules/MovieManager"
import { getFriendsByCurrentUserId } from "../../modules/FriendManager"
import "./PartyForm.css"


// TODO eventualy the guest selector will need to just load users friends and not all users

export const PartyForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [party, setParty] = useState({
        userId: currentUser,
        movieId: 0,
        date: "",
        friendId: 0,
    })

    const [isLoading, setIsLoading] = useState(false)

    // sets a variable for the current date to use as a minimum in the form's date/time picker so user can't choose a previous date
    const dateInputMin = new Date().toISOString().split(".")[0]


    // gets all of the movies and friends to populate their respective input fields
    const [friends, setFriends] = useState([])
    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newParty = { ...party }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newParty[event.target.id] = selectedVal
        setParty(newParty)
    }

    // loads movie data and updates state
    useEffect(() => {
        getAllMovies().then((movies) => {
            setMovies(movies)
        })
    }, [])

    // loads friend data and updates state
    useEffect(() => {
        getFriendsByCurrentUserId(
            JSON.parse(sessionStorage.getItem("sol_user")).id
        ).then((users) => {
            setFriends(users)
        })
    }, [])

    const handleClickSaveParty = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        const movieId = party.movieId
        const friendId = party.friendId

        if (movieId === 0 || friendId === 0) {
            window.alert("Please select a movie and a customer")
        } else {
            //invoke addParty passing party as an argument.
            //once complete, change the url and display the party list
            addParty(party).then(() => navigate("/parties"))
        }
    }

    return (
        <form className="partyForm">
            <h2 className="partyForm__title">New Watch Party</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="movie">Select a movie:</label>
                    <br />
                    <select
                        value={party.movieId}
                        name="movieId"
                        id="movieId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select a movie</option>
                        {movies.map((film) => (
                            <option key={film.id} value={film.id}>
                                {film.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="guest">Select a guest:</label>
                    <br />
                    <select
                        value={party.friendId}
                        name="friendId"
                        id="friendId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select a guest</option>
                        {friends.map((friend) => (
                            <option key={friend.id} value={friend.user.id}>
                                {friend.user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">When:</label>
                    <br />
                    <input
                        type="datetime-local"
                        id="date"
                        min={dateInputMin}
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        value={party.date}
                    />
                </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleClickSaveParty}
                    >
                        Save Party
                    </button>
            </fieldset>
        </form>
    )
}
