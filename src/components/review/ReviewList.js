import React, { useState, useEffect } from "react"
import { getAllReviews } from "../../modules/ReviewManager"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        getAllReviews().then((reviewsFromAPI) => {
            setReviews(reviewsFromAPI)
        })
    }

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <>
            <h2>Movie Reviews</h2>
            <div className="container-cards">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </>
    )
}
