import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../../modules/UserManager"
import "./Party.css"

export const PartyCard = ({ party, handleDeleteParty }) => {
    
    const guestId = party.friendId
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const partyHost = party.userId

    const [guest, setGuest] = useState([])

    const getGuests = () => {
        getUserById(guestId).then((singleGuest) => {
            setGuest(singleGuest)
        })
    }
    
    useEffect(() => {
        getGuests()
    }, [])

    const isEventExpired = () => {
        if (new Date(party.date) < new Date()) {
            return true
        } else
        return false
    }


// this determines what/if buttons will be displayed on the card (if current user is party host and event has not expired, they get "Edit and "Delete" -- if it has expired, they get "Delete"; if current user is not party host, they get no buttons)
    const generateButtons = () => {
        if (currentUser === partyHost && isEventExpired()) {
            return (
            <>
                <button
                    type="button"
                    onClick={() => handleDeleteParty(party.id)}
                >
                    Delete
                </button>
            </>
            )
        } else if (currentUser === partyHost && !isEventExpired()) {
            return (
                <>
                    <Link to={`/parties/${party.id}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <button
                        type="button"
                        onClick={() => handleDeleteParty(party.id)}
                    >
                        Delete
                    </button>
                </>
            )
        } else if (currentUser !== partyHost) {
            return ""
        }
    }

     return (
         <section className="party">
             <div className="party__image-container">
                 <img
                     className="party__image"
                     alt="image of the film"
                     src={party.movie.image}
                 />
             </div>
             <h3 className="party__movie">{party.movie.title}</h3>
             <div className="party__host">
                 <strong>Host:</strong> {party.user?.name}
             </div>
             <div className="party__date">
                 <strong>When:</strong>{" "}
                 {isEventExpired() ? (
                     <>This party has already occurred.</>
                 ) : (
                     <>
                     {new Date(party.date).toDateString()} at {new Date(party.date).toLocaleTimeString()}
                     </>
                 )}
             </div>
             <div className="party__guests">
                 <strong>Guests:</strong> {guest.name}
             </div>

             <div className="party__button-container">
                 {generateButtons()}
             </div>
         </section>
     )
}
