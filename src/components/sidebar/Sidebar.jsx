import "./Sidebar.css"
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"
import { Users } from "../../data";
import Closefriends from "../Closefirends/Closefriends";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <RssFeed className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Chat className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Chat</span>
                    </li>
                    <li className="sidebarlistitem">
                        <PlayCircleFilled className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Video</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Group className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Groups</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Bookmark className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Bookmarks</span>
                    </li>
                    <li className="sidebarlistitem">
                        <HelpOutline className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Questions</span>
                    </li>
                    <li className="sidebarlistitem">
                        <WorkOutline className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Jobs</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Event className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Events</span>
                    </li>
                    <li className="sidebarlistitem">
                        <School className="sidebarlisticon" />
                        <span className="sidebarlistitemitext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarbutton">Show More</button>
                <hr className="sidebarhr" />
                <ul className="sidebarfriendslist">
                    {Users.map(u => <Closefriends key={u.id} user={u} />)}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;