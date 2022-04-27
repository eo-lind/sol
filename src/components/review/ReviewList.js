import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllReviews, deleteReview, getReviewsForHome } from "../../modules/ReviewManager"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {
    const [reviews, setReviews] = useState([])

    const navigate = useNavigate()

    const getReviews = () => {
        getAllReviews().then((reviewsFromAPI) => {
            setReviews(reviewsFromAPI)
        })
    }

    useEffect(() => {
        getReviews()
    }, [])

    const handleDeleteReview = (id) => {
        deleteReview(id).then(() => getAllReviews().then(setReviews))
    }

    return (
        <>
            <section className="section-content">
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        navigate("/reviews/create")
                    }}
                >
                    Add Review
                </button>
            </section>
            <h2>Movie Reviews</h2>
            <div className="container-cards">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    />
                ))}
            </div>
        </>
    )
}


export const ReviewListForHome = () => {
    const [reviews, setReviews] = useState([])

    const navigate = useNavigate()

    const getReviews = () => {
        getReviewsForHome().then((reviewsFromAPI) => {
            setReviews(reviewsFromAPI)
        })
    }

    useEffect(() => {
        getReviews()
    }, [])

    const handleDeleteReview = (id) => {
        deleteReview(id).then(() => getReviewsForHome().then(setReviews))
    }

    return (
        <>
            <div className="container-cards">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    />
                ))}
            </div>
        </>
    )
}