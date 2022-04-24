import React from "react"
import "./Party.css"

// this is a child of Sol component

export const PartyCard = ({ party }) => {
    return (
        <section className="party">
            <h3 className="party__movie">{party.movie.title}</h3>
            <div className="party__host">Hosted by {party.user.name}</div>
            <div className="party__date">
                <strong>When:</strong> {party.date}
            </div>
            <div className="party__guests">
                <strong>Guests:</strong> {party.userIdGuest} (update later)
            </div>
            <div className="party__image-container">
                <img
                    className="party__image"
                    alt="image of the film"
                    src={party.movie.image}
                />
            </div>
        </section>
    )
}
