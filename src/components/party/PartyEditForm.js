import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateParty, getPartyById } from "../../modules/PartyManager"
import { getAllMovies } from "../../modules/MovieManager"
import { getFriendsByCurrentUserId } from "../../modules/FriendManager"
import "./PartyForm.css"

export const PartyEditForm = () => {
    const [party, setParty] = useState({
        movieId: 0,
        date: "",
        userId: 0,
        friendId: 0,
    })
    const [isLoading, setIsLoading] = useState(false)

    // sets a variable for the current date to use as a minimum in the form's date/time picker so user can't choose a previous date
    const dateInputMin = new Date().toISOString().split(".")[0]

    // gets all of the movies and friends to populate their respective input fields
    const [friends, setFriends] = useState([])
    const [movies, setMovies] = useState([])

    const { partyId } = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...party }
        stateToChange[evt.target.id] = evt.target.value
        setParty(stateToChange)
    }

    const updateExistingParty = (evt) => {
        evt.preventDefault()
        setIsLoading(true)

        const editedParty = {
            id: party.id,
            movieId: party.movieId,
            date: party.date,
            userId: party.userId,
            friendId: party.friendId,
        }

        updateParty(editedParty).then(() => navigate("/parties"))
    }

    useEffect(() => {
        getPartyById(partyId).then((party) => {
            setParty(party)
            setIsLoading(false)
        })
    }, [])

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

    return (
        <>
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="movie">Select a movie:</label>
                        <br />
                        <select
                            value={party.movieId}
                            name="movieId"
                            id="movieId"
                            onChange={handleFieldChange}
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
                            onChange={handleFieldChange}
                            className="form-control"
                        >
                            <option value="0">Select a guest</option>
                            {friends.map((friend) => (
                                <option key={friend.id} value={friend.id}>
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
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={party.date}
                        />
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingParty}
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
