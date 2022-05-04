import React, { useState, useEffect } from "react"
import { getMovieById } from "../../modules/MovieManager"
import "./RandomMovie.css"

export const RandomMovie = ({ movieId }) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovieById(movieId).then((movie) => {
            setMovie(movie)
        })
    }, [movieId])

    return (
        <div className="movie-spotlight">
            <div className="movie__image-container">
                <img
                    className="movie__photo"
                    alt="image of the film"
                    src={movie.image}
                />
            </div>
            <h3 className="movie__title">{movie.title}</h3>
            <div className="movie__plot">{movie.plot}</div>
            <div className="movie__rating">
                <strong>IMDb rating:</strong> {movie.imDbRating}
            </div>
            <div className="movie__mst3k">
                This version aired on {movie.seriesTitle} as episode{" "}
                {movie.episodeNumber} of season {movie.seasonNumber}.
            </div>
        </div>
    )
}
