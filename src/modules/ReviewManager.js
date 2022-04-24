// TODO may or may not need later:
// export const getReviewById = (reviewId) => {
//     return fetch(
//         `http://localhost:8088/reviews/${reviewId}`
//     ).then((res) => res.json())
// }

export const getAllReviews = () => {
    return fetch(
        `http://localhost:8088/reviews?_expand=user&_expand=movie`
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