import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "../Home"
import { FriendList } from "./user/FriendList"
import { MovieList } from "./movie/MovieList"
import { PartyList } from "./party/PartyList"
import { ReviewList } from "./review/ReviewList"
import { ReviewForm } from "./review/ReviewForm"
import { ReviewEditForm } from "./review/ReviewEditForm"
import { PartyForm } from "./party/PartyForm"
import { PartyEditForm } from "./party/PartyEditForm"
import { FriendForm } from "./user/AddFriend"
import { UserEditForm } from "./user/UserEditForm"
import { UserDetail } from "./user/UserDetail"
import { MovieDetail } from "./movie/MovieDetail"

// Private route checks the if isAuthenticated is true in child components child components - if not, user will be re-routed to login view; if isAuthenticated is true, user will have access to private routes
export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />
    }

    // checks session storage to find authorized user so long as there is one
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
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="friends/add"
                    element={
                        <PrivateRoute>
                            <FriendForm />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users/:userId"
                    element={
                        <PrivateRoute>
                            <UserDetail />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users/:userId/edit"
                    element={
                        <PrivateRoute>
                            <UserEditForm />
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
                <Route path="/movies/:movieId" element={<MovieDetail />} />
            </Routes>
        </>
    )
}
