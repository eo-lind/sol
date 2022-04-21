import React from "react"
import { UserCard } from "./user/UserCard"
import "./Sol.css"

export const Sol = () => (
    <>
        <h2>SOL</h2>
        <small>some tagline</small>

        <h2>Users</h2>
        <article className="users">
            <UserCard />
            <UserCard />
            <UserCard />
        </article>
    </>
)
