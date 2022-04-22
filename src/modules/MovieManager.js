// TODO will need later:
// export const getMovieById = (movieId) => {
//     return fetch(
//         `http://localhost:8088/movies/${movieId}`
//     ).then((res) => res.json())
// }

// TODO currrently set to just dispay the first 6 - change later

export const getAllMovies = () => {
    return fetch(`http://localhost:8088/movies?_limit=6`).then((res) =>
        res.json()
    )
}
