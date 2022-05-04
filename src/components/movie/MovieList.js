import React, { useState, useEffect } from "react"
import { getAllMovies, findMovie } from "../../modules/MovieManager"
import { MovieCard } from "./MovieCard"

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllMovies().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    // sets state of movie search as a key/value pair (intially the value is an empty string)
    const [movieSearch, foundMovie] = useState({
        title: "",
    })

    // fetches movie by searched title and sets that movie object as the state of movie
    const searchForMovie = (title) => {
        findMovie(title).then((movie) => {
            setMovies(movie)
        })
    }

    const controlInput = (event) => {
        const searchedMovie = { ...movieSearch }

        searchedMovie[event.target.id] = event.target.value
        foundMovie(searchedMovie)
    }

    const handleSearch = () => {
        searchForMovie(movieSearch.title)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className="listview-header">
                <h2>Browse Movies</h2>

                <section className="movie-search">
                    <div className="search_bar">
                        <label htmlFor="search_bar">Find a Movie</label>
                        <br />
                        <input type="text" id="title" onChange={controlInput} />
                        <button
                            type="button"
                            id="search_btn"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </section>
            </div>

            <div className="container-cards">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )
}
