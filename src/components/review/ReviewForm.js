import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllMovies } from "../../modules/MovieManager"
import { addReview } from "../../modules/ReviewManager"

export const ReviewForm = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    // sets initial default state of review
    const [review, setReview] = useState({
        movieId: 0,
        userId: currentUser,
        review: "",
    })

    const [isLoading, setIsLoading] = useState(false)

    // in order to retrieve movies so user can choose one in the form
    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    // sets state of review to connect review object's properties to input fields
    const handleControlledInputChange = (event) => {
        const newReview = { ...review }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* setting value of newReview's properties to the same as those of the review object (by id) */
        newReview[event.target.id] = selectedVal
        // ...and updating its state
        setReview(newReview)
    }

    useEffect(() => {
        //load movie data and update state
        getAllMovies().then((movies) => {
            setMovies(movies)
        })
    }, [])

    const handleClickSaveReview = (event) => {
        event.preventDefault()

        const movieId = review.movieId

        if (movieId === 0) {
            window.alert("Please select a movie to review")
        } else {
            // this will invoke addReview using review as an argument and then take the user back to the list of reviews, including the new one
            addReview(review).then(() => navigate("/reviews"))
        }
    }

    return (
        <form className="reviewForm">
            <div className="listview-header">
                <h2 className="reviewForm__title">New Review</h2>
            </div>
            <fieldset className="review-form__fieldset">
                <div className="form-group">
                    <label htmlFor="movie">Select a movie:</label>
                    <br />
                    <select
                        value={review.movieId}
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
                    <label htmlFor="review">Your review:</label>
                    <br />
                    <textarea
                        id="review"
                        name="review"
                        rows="4"
                        cols="50"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        value={review.name}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClickSaveReview}
                >
                    Save Review
                </button>
            </fieldset>
        </form>
    )
}
