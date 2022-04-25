// TODO still have to figure out how to access guests (both fetch calls below) - change later

export const getAllParties = () => {
    return fetch(
        `http://localhost:8088/parties?_expand=user&_expand=movie`
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

// TODO will need to add expansions later:
export const getPartyById = (partyId) => {
    return fetch(
        `http://localhost:8088/parties/${partyId}?_expand=movie`
    ).then((res) => res.json())
}

// TODO will need to add expansions later:
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