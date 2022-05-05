import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
    getAllParties,
    deleteParty,
    getPartiesForHome,
    getPartiesHostedByCurrentUser,
    getPartiesAttendedByCurrentUser,
} from "../../modules/PartyManager"
import { PartyCard } from "./PartyCard"

export const PartyList = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const [parties, setParties] = useState([])

    const navigate = useNavigate()

    // fetches all parties from the db and sets them as state for parties
    const getParties = () => {
        getAllParties().then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    // deletes a single party from db by its id
    const handleDeleteParty = (id) => {
        deleteParty(id).then(() => getAllParties().then(setParties))
    }

    // fetches all parties from the db where current user is host and sets them as state for parties
    const getPartiesHostedByMe = () => {
        getPartiesHostedByCurrentUser(currentUser).then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    // fetches all parties from the db where current user is guest and sets them as state for parties
    const getPartiesAttendedByMe = () => {
        getPartiesAttendedByCurrentUser(currentUser).then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    useEffect(() => {
        getParties()
    }, [])

    return (
        <>
            <div className="listview-header">
                <h2>Watch Parties</h2>
                <div className="header-button-box">
                    <button
                        type="button"
                        className="link__not__on__card"
                        onClick={() => {
                            navigate("/parties/create")
                        }}
                    >
                        Plan a Watch Party
                    </button>
                    <button
                        type="button"
                        className="link__not__on__card"
                        onClick={() => {
                            getPartiesHostedByMe()
                        }}
                    >
                        Parties I'm Hosting
                    </button>
                    <button
                        type="button"
                        className="link__not__on__card"
                        onClick={() => {
                            getPartiesAttendedByMe()
                        }}
                    >
                        Parties I'm Attending
                    </button>
                </div>
            </div>
            <div className="container-cards">
                {parties.map((party) => (
                    <PartyCard
                        key={party.id}
                        party={party}
                        handleDeleteParty={handleDeleteParty}
                    />
                ))}
            </div>
        </>
    )
}

// this component is similar to the one above, but it's just for displaying a limited number of parties on the Home view with an option to navigate to the PartyList view to see all parties
export const PartyListForHome = () => {
    const [parties, setParties] = useState([])

    const navigate = useNavigate()

    const getParties = () => {
        getPartiesForHome().then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    useEffect(() => {
        getParties()
    }, [])

    const handleDeleteParty = (id) => {
        deleteParty(id).then(() => getPartiesForHome().then(setParties))
    }

    return (
        <>
            <div className="container-cards">
                {parties.map((party) => (
                    <PartyCard
                        key={party.id}
                        party={party}
                        handleDeleteParty={handleDeleteParty}
                    />
                ))}
                <Link
                    className="link__not__on__card"
                    id="more-parties"
                    to="/parties"
                >
                    More Watch Parties
                </Link>
            </div>
        </>
    )
}
