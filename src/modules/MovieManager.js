// fetches a single movie object by id
export const getMovieById = (movieId) => {
    return fetch(`http://localhost:8088/movies/${movieId}`).then((res) =>
        res.json()
    )
}

// fetches all movie objects
export const getAllMovies = () => {
    return fetch(`http://localhost:8088/movies?_sort=title`).then((res) =>
        res.json()
    )
}

// fetches all movies, then gets a random number to use to return whatever movie has that number as an id
export const getRandomId = () => {
    return fetch(`http://localhost:8088/movies`)
        .then((result) => result.json())
        .then((movies) => {
            const randomIndex = Math.floor(Math.random() * movies.length)
            const randomMovie = movies[randomIndex]
            return randomMovie.id
        })
}

// supports a search bar that fetches a specific movie with a query of its title
export const findMovie = (movieTitle) => {
    return fetch(`http://localhost:8088/movies?q=${movieTitle}`).then(
        (response) => response.json()
    )
}
