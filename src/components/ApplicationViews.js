import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { UserList } from "./user/UserList"
import { MovieList } from "./movie/MovieList"
import { PartyList } from "./party/PartyList"
import { ReviewList } from "./review/ReviewList"
import { ReviewForm } from "./review/ReviewForm"
import { ReviewEditForm } from "./review/ReviewEditForm"
import { PartyForm } from "./party/PartyForm"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* TODO Renders the user list - change to friends later */}
                <Route path="/users" element={<UserList />} />
                <Route path="/parties" element={<PartyList />} />
                <Route path="/parties/create" element={<PartyForm />} />
                <Route path="/reviews" element={<ReviewList />} />
                <Route path="/reviews/create" element={<ReviewForm />} />
                <Route
                    path="/reviews/:reviewId/edit"
                    element={<ReviewEditForm />}
                />
                <Route path="/movies" element={<MovieList />} />
            </Routes>
        </>
    )
}
