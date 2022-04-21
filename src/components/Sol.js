import React from "react"
import { UserCard } from "./user/UserCard"
import { PartyCard } from "./party/PartyCard"
import "./Sol.css"

export const Sol = () => (
    <>
        <h2>SOL</h2>
        <small>some tagline</small>

        <h2>Friends</h2>
        <article className="users">
            <UserCard />
            <UserCard />
            <UserCard />
        </article>

        <h2>Watch Parties</h2>
        <article className="parties">
            <PartyCard />
            <PartyCard />
            <PartyCard />
        </article>
    </>
)
