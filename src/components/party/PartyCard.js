import React from "react"
import "./Party.css"

// this is a child of Sol component

export const PartyCard = () => (
    <section className="party">
        <h3 className="party__movie">Movie Title</h3>
        <div className="party__host">Hosted by A Person</div>
        <div className="party__date">A date and time</div>
        <div className="party__guests">Guests: some names</div>
        <div className="party__image-container">
            <img className="party__image" alt="image of movie name" src="#" />
        </div>
    </section>
)