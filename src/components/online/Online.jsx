import "./Online.css"

const Online = ({ user }) => {
    return (
        <li className="rightbarfriend">
            <div className="rightbarprofilecontainer">
                <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
                <span className="onlinebadge"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    );
}

export default Online;
