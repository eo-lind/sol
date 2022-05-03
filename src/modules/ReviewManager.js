// fetches all reviews to display in the ReviewList and sorts them from oldest to newest based on the review object's ID number
export const getAllReviews = () => {
    return fetch(
        `http://localhost:8088/reviews?_sort=id&_order=desc&_expand=user&_expand=movie`
    ).then((res) => res.json())
}

export const addReview = (newReview) => {
    return fetch(`http://localhost:8088/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
    }).then((response) => response.json())
}

export const getReviewById = (reviewId) => {
    return fetch(
        `http://localhost:8088/reviews/${reviewId}?_expand=movie`
    ).then((res) => res.json())
}

export const updateReview = (editedReview) => {
    return fetch(
        `http://localhost:8088/reviews/${editedReview.id}?_expand=movie`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedReview),
        }
    ).then((data) => data.json())
}

export const deleteReview = (id) => {
    return fetch(`http://localhost:8088/reviews/${id}`, {
        method: "DELETE",
    }).then((result) => result.json())
}

// fetches a limited number of reviews to display in the Home view and sorts them from oldest to newest based on the review object's ID number
export const getReviewsForHome = () => {
    return fetch(
        `http://localhost:8088/reviews?_sort=id&_order=desc&_expand=user&_expand=movie&_limit=5`
    ).then((res) => res.json())
}

// fetches reviews authored by current user, then sorts them from oldest to newest based on the review object's ID number
export const getReviewsByCurrentUserId = (currentUserId) => {
    return fetch(
        `http://localhost:8088/reviews?userId=${currentUserId}&_sort=id&_order=desc&_expand=user&_expand=movie`
    ).then((response) => response.json())
}