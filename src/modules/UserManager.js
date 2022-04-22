// TODO will need later:
// export const getUserById = (userId) => {
//     return fetch(
//         `http://localhost:8088/users/${userId}`
//     ).then((res) => res.json())
// }

// TODO currrently set to just dispay the first 6 - change later

export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users?_limit=6`).then((res) =>
        res.json()
    )
}
