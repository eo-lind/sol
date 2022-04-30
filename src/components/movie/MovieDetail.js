import React, { useState, useEffect } from "react"
import { getMovieById } from "../../modules/MovieManager"
import "./Movie.css"
import { useParams } from "react-router-dom"

export const MovieDetail = () => {
    const [movie, setMovie] = useState([])

    const { movieId } = useParams()

    useEffect(() => {
        getMovieById(movieId).then((movie) => {
            setMovie(movie)
        })
    }, [movieId])

    return (
        <section className="card">
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
                <strong>imDb rating:</strong> {movie.imDbRating}
            </div>
            <div className="movie__mst3k">
                This version aired on {movie.seriesTitle} as episode{" "}
                {movie.episodeNumber} of season {movie.seasonNumber}.
            </div>
        </section>
    )
}
