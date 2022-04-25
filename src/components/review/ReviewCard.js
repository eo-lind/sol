import React from "react"
import { Link } from "react-router-dom"
import "./Review.css"

// this is a child of Sol component

export const ReviewCard = ({ review, handleDeleteReview }) => {
    return (
        <section className="review">
            <div className="review__image-container">
                <img
                    className="review__image"
                    alt="image of the film"
                    src={review.movie.image}
                />
            </div>
            <h3 className="review__title">{review.movie.title}</h3>
            <div className="review__author">Reviewed by {review.user.name}</div>
            <div className="review__body">{review.review}</div>
            <div className="review__rating">
                <strong>imDb rating:</strong> {review.movie.imDbRating}
            </div>
            <div className="review__mst3k">
                This version of {review.movie.title} aired on{" "}
                {review.movie.seriesTitle} as episode{" "}
                {review.movie.episodeNumber} of season{" "}
                {review.movie.seasonNumber}.
            </div>
            <Link to={`/reviews/${review.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button type="button" onClick={() => handleDeleteReview(review.id)}>
                Delete
            </button>
        </section>
    )
}