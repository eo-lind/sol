import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllParties } from "../../modules/PartyManager"
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
                    <PartyCard key={party.id} party={party} />
                ))}
            </div>
        </>
    )
}
