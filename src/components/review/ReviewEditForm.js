import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateReview, getReviewById } from "../../modules/ReviewManager"
import "./ReviewForm.css"

export const ReviewEditForm = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

    const [review, setReview] = useState({
        movieId: 0,
        review: "",
        userId: currentUser
    })
    const [isLoading, setIsLoading] = useState(false)

    const { reviewId } = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...review }
        stateToChange[evt.target.id] = evt.target.value
        setReview(stateToChange)
    }

    const updateExistingReview = (evt) => {
        evt.preventDefault()
        setIsLoading(true)

        const editedReview = {
            id: review.id,
            movieId: review.movieId,
            review: review.review,
            userId: review.userId,
        }

        updateReview(editedReview).then(() => navigate("/reviews"))
    }

    useEffect(() => {
        getReviewById(reviewId).then((review) => {
            setReview(review)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="review"> 
                            Your review of <strong>{review.movie?.title}</strong>:
                        </label>
                        <br />

                        <textarea
                            id="review"
                            name="review"
                            rows="4"
                            cols="50"
                            onChange={handleFieldChange}
                            required
                            className="form-control"
                            value={review.review}
                        ></textarea>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingReview}
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
