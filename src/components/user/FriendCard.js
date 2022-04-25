export const FriendCard = ({ friend, handleDeleteFriend }) => {
    console.log(friend);
    return (
        <>
            <section className="user">
                <div className="user__image-container">
                    <img
                        className="user__photo"
                        alt="a photo of name"
                        src={friend.user.profilePic}
                    />
                </div>
                <h3 className="user__name">{friend.user.name}</h3>
                <div className="user__about">
                    <strong>About me:</strong> {friend.user.aboutMe}
                </div>
                <div className="user__likes">
                    <strong>Likes:</strong> {friend.user.likes}
                </div>
                <div className="user__dislikes">
                    <strong>Dislikes:</strong> {friend.user.dislikes}
                </div>
                <button
                    type="button"
                    onClick={() => handleDeleteFriend(friend.user.id)}
                >
                    Unfriend
                </button>
            </section>
        </>
    )
}
