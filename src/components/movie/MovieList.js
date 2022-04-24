import React, { useState, useEffect } from "react"
import { getAllMovies } from "../../modules/MovieManager"
import { MovieCard } from "./MovieCard"

export const MovieList = () => {
    const [movies, setMovies] = useState([])

   const getMovies = () => {
       getAllMovies().then((moviesFromAPI) => {
           setMovies(moviesFromAPI)
       })
   }

   useEffect(() => {
       getMovies()
   }, [])

   return (
       <>
       <h2>Browse Movies</h2>
       <div className="container-cards">
           {movies.map((movie) => (
               <MovieCard key={movie.id} movie={movie} />
           ))}
       </div>
       </>
   )
}