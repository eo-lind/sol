import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../../modules/UserManager"
import "./Party.css"

// this is a child of Sol component

// ternary statement insures that edit/delete buttons will only display if logged in user is host of the party

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
                 <strong>When:</strong> {party.date}
             </div>
             <div className="party__guests">
                 <strong>Guests:</strong> {guest.name}
             </div>

             <div className="party__button-container">
                 {currentUser === partyHost ? (
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
                 ) : (
                     ""
                 )}
             </div>
         </section>
     )
}
