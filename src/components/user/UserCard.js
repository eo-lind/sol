import React from "react"
import "./User.css"

// this is a child of Sol component

export const UserCard = ({ user }) => {

     return (
         <section className="user">
             <div className="user__image-container">
                 <img
                     className="user__photo"
                     alt="a photo of name"
                     src={user.profilePic}
                 />
             </div>
             <h3 className="user__name">{user.name}</h3>
             <div className="user__about">
                 <strong>About me:</strong> {user.aboutMe}
             </div>
             <div className="user__likes">
                 <strong>Likes:</strong> {user.likes}
             </div>
             <div className="user__dislikes">
                 <strong>Dislikes:</strong> {user.dislikes}
             </div>
         </section>
     )
     }
