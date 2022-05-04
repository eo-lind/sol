import React from "react"
import "./Movie.css"

export const MovieCard = ({ movie }) => {
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
                <strong>IMDb rating:</strong> {movie.imDbRating}
            </div>
            <div className="movie__mst3k">
                This version aired on {movie.seriesTitle} as episode{" "}
                {movie.episodeNumber} of season {movie.seasonNumber}.
            </div>
        </section>
    )
}
