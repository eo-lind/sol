// TODO will need later (will need to add expansions):
// export const getPartyById = (partyId) => {
//     return fetch(
//         `http://localhost:8088/parties/${partyId}`
//     ).then((res) => res.json())
// }

// TODO still have to figure out how to access guests - change later

export const getAllParties = () => {
    return fetch(
        `http://localhost:8088/parties?_expand=user&_expand=movie`
    ).then((res) => res.json())
}
