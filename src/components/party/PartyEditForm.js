import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateParty, getPartyById } from "../../modules/PartyManager"
import { getAllMovies } from "../../modules/MovieManager"
import { getAllUsers } from "../../modules/UserManager"
import "./PartyForm.css"

export const PartyEditForm = () => {
    const [party, setParty] = useState({
        movieId: 0,
        date: "",
        userId: 0,
        userIdGuest: 0,
    })
    const [isLoading, setIsLoading] = useState(false)

    // sets a variable for the current date to use as a minimum in the form's date/time picker so user can't choose a previous date
    const dateInputMin = new Date().toISOString().split(".")[0]

    // gets all of the movies and friends to populate their respective input fields
    const [users, setUsers] = useState([])
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
            userIdGuest: party.userIdGuest,
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
        getAllUsers().then((users) => {
            setUsers(users)
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
                            value={party.userIdGuest}
                            name="userIdGuest"
                            id="userIdGuest"
                            onChange={handleFieldChange}
                            className="form-control"
                        >
                            <option value="0">Select a guest</option>
                            {users.map((person) => (
                                <option key={person.id} value={person.id}>
                                    {person.name}
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
