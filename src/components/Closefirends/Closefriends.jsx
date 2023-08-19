import "./closefriends.css"

const Closefriends = ({ user }) => {
    return (
        <li className="sidebarfriendslistitem">

            <img className="friendsimages" src={user.profilePicture} alt="" />
            <span className="friendstext">{user.username}</span>
        </li>
    );
}

export default Closefriends;