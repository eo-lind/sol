import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { UserList } from "./user/UserList"
import { MovieList } from "./movie/MovieList"
import { PartyList } from "./party/PartyList"

export const ApplicationViews = () => {
    return (
        <>
            {/* ! the lines below are temporary - routes don't seem to be working right now*/}

            <UserList />
            <MovieList />
            <PartyList />

            <Routes>
                <Route path="/" element={<Home />} />

                {/* TODO Renders the user list - change to friends later */}
                {/* <Route path="/users" element={<UserList />} /> */}
            </Routes>
        </>
    )
}
