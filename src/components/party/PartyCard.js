import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../../modules/UserManager"
import "./Party.css"

// this is a child of Sol component


export const PartyCard = ({ party, handleDeleteParty }) => {
    
    const guestId = party.friendId

    const [guest, setGuest] = useState([])

    const getGuests = () => {
        getUserById(guestId).then((singleGuest) => {
            setGuest(singleGuest)
        })
    }
    
    useEffect(() => {
        getGuests()
    }, []) 

     return (
        <section className="party">
            <h3 className="party__movie">{party.movie.title}</h3>
            <div className="party__host"><strong>Host:</strong> {party.user?.name}</div>
            <div className="party__date">
                <strong>When:</strong> {party.date}
            </div>
            <div className="party__guests">
                <strong>Guests:</strong> {guest.name}
            </div>
            <div className="party__image-container">
                <img
                    className="party__image"
                    alt="image of the film"
                    src={party.movie.image}
                />
            </div>
            <Link to={`/parties/${party.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button type="button" onClick={() => handleDeleteParty(party.id)}>
                Cancel Party
            </button>
        </section>
    )
}
