import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getAllParties, deleteParty, getPartiesForHome } from "../../modules/PartyManager"
import { PartyCard } from "./PartyCard"

export const PartyList = () => {
    const [parties, setParties] = useState([])

    const navigate = useNavigate()

    const getParties = () => {
        getAllParties().then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    useEffect(() => {
        getParties()
    }, [])

    
    const handleDeleteParty = (id) => {
        deleteParty(id).then(() => getAllParties().then(setParties))
    }



    return (
        <>
            <section className="section-content">
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        navigate("/parties/create")
                    }}
                >
                    Plan a Watch Party
                </button>
            </section>
            <h2>Watch Parties</h2>
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