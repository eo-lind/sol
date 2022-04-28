// import { getMyFriends } from "../../modules/FriendManager";
// import { getAllUsers } from "../../modules/UserManager"
// import { UserCard } from "./UserCard";


// const [users, setUsers] = useState([])
// const [currentFriends, setCurrentFriends] = useState([])
// const currentUser = JSON.parse(sessionStorage.getItem("sol_user")).id

// // get users from database
// useEffect(() => {
//     getAllUsers().then((usersAPI) => {
//         setUsers(usersAPI)
//     })
// }, [])


// // get currently logged in users friends
//   useEffect(() => {
//     getMyFriends(parseInt(sessionStorage.getItem("sol_user"))).then(
//       (friendsAPI) => {
//         setCurrentFriends(friendsAPI);
//       }
//     );
//   }, []);

//   const changeThisToHandleSave = () => {
//       if (currentFriends.length > 0) {
//         currentFriends.forEach((friend) => {
//             users.forEach((user) => {
//                 if (friend.userId === user.id || friend.userId === currentUser) {
//                     return <>"card without add button"</>
//                 } else {return (
//                     <>
//                         card with add button{" "}
//                         <div className="container-cards">
//                             <UserCard key={user.id} user={user} />
//                         </div>
//                     </>
//                 )}

//             })
//         })

//       }
//   }