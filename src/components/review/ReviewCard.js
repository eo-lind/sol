import React from "react"
import { Link } from "react-router-dom"
import "./Review.css"

export const ReviewCard = ({ review, handleDeleteReview }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const reviewAuthor = review.userId

    return (
        <section className="card">
            <h3 className="review__title">
                <strong>Review:</strong>{" "}
                <Link to={`/movies/${review.movie.id}`}>
                    {review.movie.title}
                </Link>
            </h3>
            <div className="review__author">
                <strong>Reviewed by: </strong>
                <Link to={`/users/${review.user.id}`}>{review.user.name}</Link>
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
            {/* ternary statement insures that edit/delete buttons will only display if logged in user is author of the review */}
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
