// TODO will need later:
// export const getMovieById = (movieId) => {
//     return fetch(
//         `http://localhost:8088/movies/${movieId}`
//     ).then((res) => res.json())
// }


export const getAllMovies = () => {
    return fetch(`http://localhost:8088/movies`).then((res) =>
        res.json()
    )
}
