// fetches a single user object by id
export const getUserById = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`).then((res) =>
        res.json()
    )
}

// fetches all user objects
export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) => res.json())
}

// TODO this is the same as above remove if it's not being used (replace if it is)
// export const getAllTheUsers = () => {
//     return fetch(`http://localhost:8088/users`).then((res) => res.json())
// }

// updates a party object by ID (only the current user, whose ID comes from session storage)
export const updateProfile = (editedUser) => {
    return fetch(`http://localhost:8088/users/${editedUser.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
    }).then((data) => data.json())
}

// fetches the current user's user object by id
export const getLoggedInUserById = () => {
    const currentUserId = JSON.parse(sessionStorage.getItem("sol_user")).id
    return fetch(`http://localhost:8088/users/${currentUserId}`).then((res) =>
        res.json()
    )
}

// supports a search bar that fetches a specific user with a query of their name
export const findUser = (userName) => {
    return fetch(`http://localhost:8088/users?q=${userName}`).then((response) =>
        response.json()
    )
}
