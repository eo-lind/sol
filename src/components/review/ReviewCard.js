import React from "react"
import { Link } from "react-router-dom"
import "./Review.css"

// this is a child of Sol component

// ternary statement insures that edit/delete buttons will only display if logged in user is author of the review

export const ReviewCard = ({ review, handleDeleteReview }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const reviewAuthor = review.userId


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
            <div className="review__author">
                <strong>Reviewed by:</strong> {review.user.name}
            </div>
            <div className="review__body">
                <strong>Review:</strong> {review.review}
            </div>
            <div className="review__rating">
                <strong>imDb rating:</strong> {review.movie.imDbRating}
            </div>
            <div className="review__mst3k">
                <strong>Summary:</strong> {review.movie.plot}
            </div>
            <div className="review__mst3k">
                This version of {review.movie.title} aired on{" "}
                {review.movie.seriesTitle} as episode{" "}
                {review.movie.episodeNumber} of season{" "}
                {review.movie.seasonNumber}.
            </div>

            <div className="review__button-container">
                {currentUser === reviewAuthor ? (
                    <>
                        <Link to={`/reviews/${review.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button
                            type="button"
                            onClick={() => handleDeleteReview(review.id)}
                        >
                            Delete
                        </button>
                    </>
                ) : (
                    ""
                )}
            </div>
        </section>
    )
}