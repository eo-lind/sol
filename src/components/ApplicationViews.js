import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "../Home"
import { UserList } from "./user/UserList"
import { FriendList } from "./user/FriendList"
import { MovieList } from "./movie/MovieList"
import { PartyList } from "./party/PartyList"
import { ReviewList } from "./review/ReviewList"
import { ReviewForm } from "./review/ReviewForm"
import { ReviewEditForm } from "./review/ReviewEditForm"
import { PartyForm } from "./party/PartyForm"
import { PartyEditForm } from "./party/PartyEditForm"
import { FriendForm } from "./user/AddFriend"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("sol_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("sol_user") !== null)
    }

    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/login"
                    element={<Login setAuthUser={setAuthUser} />}
                />
                <Route exact path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
           
                <Route path="friends/add" element={<PrivateRoute><FriendForm /></PrivateRoute>} />

                {/* TODO Renders the user list - change to friends later */}
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <UserList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/friends"
                    element={
                        <PrivateRoute>
                            <FriendList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/parties"
                    element={
                        <PrivateRoute>
                            <PartyList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/parties/create"
                    element={
                        <PrivateRoute>
                            <PartyForm />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/parties/:partyId/edit"
                    element={
                        <PrivateRoute>
                            <PartyEditForm />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/reviews"
                    element={
                        <PrivateRoute>
                            <ReviewList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/reviews/create"
                    element={
                        <PrivateRoute>
                            <ReviewForm />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/reviews/:reviewId/edit"
                    element={
                        <PrivateRoute>
                            <ReviewEditForm />
                        </PrivateRoute>
                    }
                />
                <Route path="/movies" element={<MovieList />} />
            </Routes>
        </>
    )
}
