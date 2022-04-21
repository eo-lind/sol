import React from "react"
import "./Review.css"

// this is a child of Sol component

export const ReviewCard = () => (
    <section className="review">
        <h3 className="review__movie">Some Movie Title</h3>
        <div className="review__author">Reviewed by some user</div>
        <div className="review__body">My review: Man, that movie sucked.</div>
    </section>
)