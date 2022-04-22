import React from "react"
import "./Party.css"

// this is a child of Sol component

export const PartyCard = ({ party }) => {
    return (
        <section className="party">
        <h3 className="party__movie">{party.movieId.title}</h3>
        <div className="party__host">Hosted by {party.userId.name}</div>
        <div className="party__date">When: {party.date}</div>
        <div className="party__guests">Guests: {party.UserIdGuest} (update later)</div>
        <div className="party__image-container">
            <img className="party__image" alt="image of movie name" src="#" />
        </div>
    </section>
    )
}
