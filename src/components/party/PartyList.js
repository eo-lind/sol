import React, { useState, useEffect } from "react"
import { getAllParties } from "../../modules/PartyManager"
import { PartyCard } from "./PartyCard"

export const PartyList = () => {
    const [parties, setParties] = useState([])

    const getParties = () => {
        getAllParties().then((partiesFromAPI) => {
            setParties(partiesFromAPI)
        })
    }

    useEffect(() => {
        getParties()
    }, [])

    return (
        <div className="container-cards">
            {parties.map((party) => (
                <PartyCard key={party.id} party={party} />
            ))}
        </div>
    )
}
