import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getMyFriends, addFriend } from "../../modules/FriendManager"
import "./Review.css"

export const ReviewCard = ({ review, handleDeleteReview }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id
    const reviewAuthor = review.userId

    // ! for the add friend button, which currently doesn't work
    // // get friends to check against review author
    // const [friends, setFriends] = useState([])
    // const navigate = useNavigate()
    // const getAllMyFriends = (userId) => {
    //     getMyFriends(userId).then((myFriends) => {
    //         setFriends(myFriends)
    //     })
    // }

    // useEffect(() => {
    //     getAllMyFriends(currentUser)
    // }, [])

    // // add review author as friend
    // const handleAddReviewerAsFriend = (id) => {
        
    //     let friendIdArr = []
    //     friends.forEach((friend) => {
    //         friendIdArr.push(friend.userId)
    //     })

    //     const newFriend = {
    //         userId: id,
    //         currentUserId: currentUser,
    //     }
    //     const reverseFriend = {
    //         userId: newFriend.currentUserId,
    //         currentUserId: newFriend.userId,
    //     }
    //     if (
    //         newFriend.userId !== newFriend.currentUserId &&
    //         newFriend.userId !==
    //             friendIdArr.find((element) => element === newFriend.userId)
    //     ) {
    //         addFriend(newFriend).then(() =>
    //             addFriend(reverseFriend).then(() => navigate("/friends"))
    //         )
    //     } else {
    //         window.alert(
    //             "Cannot add friend. You have tried to add yourself or an existing friend."
    //         )
    //     }
    // }

    return (
        <section className="review">
            <div className="review__image-container">
                <img
                    className="review__image"
                    alt="image of the film"
                    src={review.movie.image}
                />
            </div>
            <h3 className="review__title">
                <strong>Review of:</strong> {review.movie.title}
            </h3>
            <div className="review__author">
                <strong>Reviewed by:</strong> {review.user.name}
            </div>
            {/*  ! This doesn't work: */}
            {/* <div className="review__add-friend">
                <button
                    type="button"
                    id="friend-btn"
                    onClick={handleAddReviewerAsFriend}
                >
                    Add Friend
                </button>
            </div> */}
            <div className="review__body">
                <strong>Review:</strong> {review.review}
            </div>
            <div className="review__rating">
                <strong>imDb rating:</strong> {review.movie.imDbRating}
            </div>
            <div className="review__mst3k">
                <strong>Summary:</strong> {review.movie.plot}
            </div>
            <div className="review__mst3k">
                This version of {review.movie.title} aired on{" "}
                {review.movie.seriesTitle} as episode{" "}
                {review.movie.episodeNumber} of season{" "}
                {review.movie.seasonNumber}.
            </div>
            {/* ternary statement insures that edit/delete buttons will only display if logged in user is author of the review */}
            <div className="review__button-container">
                {currentUser === reviewAuthor ? (
                    <>
                        <Link to={`/reviews/${review.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button
                            type="button"
                            onClick={() => handleDeleteReview(review.id)}
                        >
                            Delete
                        </button>
                    </>
                ) : (
                    ""
                )}
            </div>
        </section>
    )
}
