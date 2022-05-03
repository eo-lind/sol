import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../../modules/UserManager"
import "./Party.css"

export const PartyCard = ({ party, handleDeleteParty }) => {
    const guestId = party.friendId
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const partyHost = party.userId

    const [guest, setGuest] = useState([])

    // gets guests by user id (based on the guest id in the party object) so their names can be displayed on the party card
    const getGuests = () => {
        getUserById(guestId).then((singleGuest) => {
            setGuest(singleGuest)
        })
    }

    useEffect(() => {
        getGuests()
    }, [])

    // determines whether or not party date is in the past and returns true or false
    const isEventExpired = () => {
        if (new Date(party.date) < new Date()) {
            return true
        } else return false
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
        <section className="card">
            <div className="party__image-container">
                <img
                    className="party__image"
                    alt="image of the film"
                    src={party.movie.image}
                />
            </div>
            <Link to={`/movies/${party.movie.id}`}>
                <h3 className="party__movie">{party.movie.title}</h3>
            </Link>

            <div className="party__host">
                <strong>Host:</strong>{" "}
                <Link to={`/users/${party.user?.id}`}>{party.user?.name}</Link>
            </div>
            <div className="party__date">
                <strong>When:</strong>{" "}
                {isEventExpired() ? (
                    <>This party has already occurred.</>
                ) : (
                    <>
                        {new Date(party.date).toDateString()} at{" "}
                        {new Date(party.date).toLocaleTimeString()}
                    </>
                )}
            </div>
            <div className="party__guests">
                <strong>Guests:</strong>{" "}
                <Link to={`/users/${guest.id}`}>{guest.name}</Link>
            </div>

            <div className="party__button-container">{generateButtons()}</div>
        </section>
    )
}
