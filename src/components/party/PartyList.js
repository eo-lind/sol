import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
    getAllParties,
    deleteParty,
    getPartiesForHome,
    getPartiesHostedByCurrentUser
} from "../../modules/PartyManager"
import { PartyCard } from "./PartyCard"

export const PartyList = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const [parties, setParties] = useState([])

    const navigate = useNavigate()

    const getParties = () => {
        getAllParties().then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    

    const handleDeleteParty = (id) => {
        deleteParty(id).then(() => getAllParties().then(setParties))
    }

    const getPartiesHostedByMe = () => {
        getPartiesHostedByCurrentUser(currentUser).then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    useEffect(() => {
        getParties()
    }, [])

    return (
        <>
            <h2>Watch Parties</h2>
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
            </div>
            <Link className="link__not__on__card" to="/parties">
                More Watch Parties
            </Link>
        </>
    )
}
