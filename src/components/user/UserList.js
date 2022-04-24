import React, { useState, useEffect } from "react"
import { getAllUsers } from "../../modules/UserManager"
import { UserCard } from "./UserCard"

export const UserList = () => {
    const [users, setUsers] = useState([])

   const getUsers = () => {
       getAllUsers().then((usersFromAPI) => {
           setUsers(usersFromAPI)
       })
   }

   useEffect(() => {
       getUsers()
   }, [])

   return (
       <>
       <h2>Browse Members</h2>
       <div className="container-cards">
           {users.map((user) => (
               <UserCard key={user.id} user={user} />
           ))}
       </div>
       </>
   )
}