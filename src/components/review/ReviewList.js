import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getAllReviews, deleteReview, getReviewsForHome, getReviewsByCurrentUserId } from "../../modules/ReviewManager"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
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

    const getMyReviews = () => {
        getReviewsByCurrentUserId(currentUser).then((reviewsFromAPI) => {
            setReviews(reviewsFromAPI)
        })
    }

    return (
        <>
            <h2>Movie Reviews</h2>
            <button
                type="button"
                className="link__not__on__card"
                onClick={() => {
                    navigate("/reviews/create")
                }}
            >
                Add Review
            </button>
            <button
                type="button"
                className="link__not__on__card"
                onClick={() => {
                    getMyReviews()
                }}
            >
                My Reviews
            </button>
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
            <Link className="link__not__on__card" to="/reviews">
                More Movie Reviews
            </Link>
        </>
    )
}
