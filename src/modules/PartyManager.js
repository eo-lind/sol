export const getAllParties = () => {
    return fetch(
        `http://localhost:8088/parties?_sort=date&_expand=user&_expand=movie`
    ).then((res) => res.json())
}

export const addParty = (newParty) => {
    return fetch(`http://localhost:8088/parties`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newParty),
    }).then((response) => response.json())
}

export const getPartyById = (partyId) => {
    return fetch(`http://localhost:8088/parties/${partyId}?_expand=movie`).then(
        (res) => res.json()
    )
}

export const updateParty = (editedParty) => {
    return fetch(
        `http://localhost:8088/parties/${editedParty.id}?_expand=movie`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedParty),
        }
    ).then((data) => data.json())
}

export const deleteParty = (id) => {
    return fetch(`http://localhost:8088/parties/${id}`, {
        method: "DELETE",
    }).then((result) => result.json())
}

export const getPartiesForHome = () => {
    return fetch(
        `http://localhost:8088/parties?_sort=date&_expand=user&_expand=movie&_limit=6`
    ).then((res) => res.json())
}

// fetches parties hosted by current user, then sorts them from oldest to newest based on the review object's ID number
export const getPartiesHostedByCurrentUser = (currentUserId) => {
    return fetch(
        `http://localhost:8088/parties?userId=${currentUserId}&_sort=date&_expand=user&_expand=movie`
    ).then((response) => response.json())
}

// fetches parties attended by current user, then sorts them from oldest to newest based on the review object's ID number
export const getPartiesAttendedByCurrentUser = (currentUserId) => {
    return fetch(
        `http://localhost:8088/parties?friendId=${currentUserId}&_sort=date&_expand=user&_expand=movie`
    ).then((response) => response.json())
}