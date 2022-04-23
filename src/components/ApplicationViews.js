import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { UserList } from "./user/UserList"
import { MovieList } from "./movie/MovieList"
import { PartyList } from "./party/PartyList"
import { ReviewList } from "./review/ReviewList"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* TODO Renders the user list - change to friends later */}
                <Route path="/users" element={<UserList />} />
                <Route path="/parties" element={<PartyList />} />
                <Route path="/reviews" element={<ReviewList />} />
                <Route path="/movies" element={<MovieList />} />
            </Routes>
        </>
    )
}
