export const getUserById = (userId) => {
    return fetch(
        `http://localhost:8088/users/${userId}`
    ).then((res) => res.json())
}


export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
        res.json()
    )
}

export const getAllTheUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) => res.json())
}

export const updateProfile = (editedUser) => {
    return fetch(
        `http://localhost:8088/users/${editedUser.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedUser),
        }
    ).then((data) => data.json())
}

export const getLoggedInUserById = () => {
    const currentUserId = JSON.parse(sessionStorage.getItem("sol_user")).id
    return fetch(`http://localhost:8088/users/${currentUserId}`).then((res) =>
        res.json()
    )
}

export const findUser = (userName) => {
    return fetch(`http://localhost:8088/users?q=${userName}`).then((response) =>
        response.json()
    )
}