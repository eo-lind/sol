export const getMovieById = (movieId) => {
    return fetch(`http://localhost:8088/movies/${movieId}`).then((res) =>
        res.json()
    )
}

export const getAllMovies = () => {
    return fetch(`http://localhost:8088/movies`).then((res) => res.json())
}

export const getRandomId = () => {
    return fetch(`http://localhost:8088/movies`)
        .then((result) => result.json())
        .then((movies) => {
            const randomIndex = Math.floor(Math.random() * movies.length)
            const randomMovie = movies[randomIndex]
            return randomMovie.id
        })
}
