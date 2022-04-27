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

export const updateProfile = (editedProfile) => {
    return fetch(
        `http://localhost:8088/users/${editedProfile.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProfile),
        }
    ).then((data) => data.json())
}