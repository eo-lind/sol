// gets all friends of logged in user (currentUserId in database = logged in user)
export const getFriendsByCurrentUserId = (currentUserId) => {
    return fetch(
        `http://localhost:8088/friends?currentUserId=${currentUserId}&_expand=user`
    ).then((response) => response.json())
}

// unfriends another user
export const deleteFriend = (friendId) => {
    return fetch(`http://localhost:8088/friends/${friendId}`, {
        method: "DELETE",
    }).then((response) => response.json())
}

// adds a new friend (userId) to logged in user's (currentUserId) friend list

export const addFriend = (newFriend) => {
    return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newFriend),
    }).then((response) => response.json())
}

