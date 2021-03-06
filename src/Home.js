import React, { useState, useEffect } from "react"
import { RandomMovie } from "./components/movie/RandomMovie"
import { getRandomId } from "./modules/MovieManager"
import { PartyListForHome } from "./components/party/PartyList"
import { ReviewListForHome } from "./components/review/ReviewList"
import { ShowLoggedInProfile } from "./components/user/UserList"
import "./Home.css"

export const Home = () => {
    const [randomMovieId, setRandomMovieId] = useState(0)

    // gets a random movie id and sets it as the state for randomMovieId
    const refreshRandomMovie = () => {
        getRandomId().then(setRandomMovieId)
    }

    // after Home component renders, this effect will give it the ability to get another random movie id and set it as the state of randomMovieId if called
    useEffect(() => {
        refreshRandomMovie()
    }, [])

    return (
        <>
            <section className="column-container">
                <div className="column1">
                    <h2 className="home--column-headers">Watch Parties</h2>
                    <PartyListForHome />
                </div>
                <div className="column2">
                    <h2 className="home--column-headers">Movie Reviews</h2>
                    <ReviewListForHome />
                </div>
                <div className="column3">
                    <h2 className="home--column-headers">
                        Random Movie Generator
                    </h2>
                    <div className="column3__component-container">
                        {randomMovieId && (
                            <RandomMovie movieId={randomMovieId} />
                        )}
                        <button
                            className="link__not__on__card"
                            id="random-movie-button"
                            onClick={refreshRandomMovie}
                        >
                            Random Movie &#x27f3;
                        </button>
                    </div>
                    <div className="column3__component-container">
                        <ShowLoggedInProfile />
                    </div>
                </div>
            </section>
        </>
    )
}
