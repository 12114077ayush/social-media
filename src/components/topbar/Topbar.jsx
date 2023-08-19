import "./Topbar.css"
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Topbar = ({ topbar }) => {
    const Topbarprofile = () => {
        return (
            <>
                <div className="topbarcontainer">
                    <div className="topbarleft">
                        <a href="/Profile" className="logo">Socioface</a>
                    </div>
                    <div className="topbarcenter">
                        <div className="searchbar">
                            <Search className="searchicon" />
                            <input placeholder="search for friends, posts or video" className="searchinput" />
                        </div>
                    </div>
                    <div className="topbarright">
                        <div className="topbarlinks">
                            <Link className="topbarlink" to="/Home">Homepage</Link>
                            <Link className="topbarlink" to="/login">Timeline</Link>
                        </div>
                        <div className="topbaricons">
                            <div className="topbarIconitems">
                                <Person />
                                <span className="topbarIconbadges">1</span>
                            </div>
                            <div className="topbarIconitems">
                                <Chat />
                                <span className="topbarIconbadges">1</span>
                            </div>
                            <div className="topbarIconitems">
                                <Notifications />
                                <span className="topbarIconbadges">2</span>
                            </div>
                        </div>
                        <Link to="/Profile"> <img src="/assets/person/1.jpeg" alt="" className="topbarimg" /> </Link>
                        <Link to="/">  <button className="buttonlogin">logout</button></Link>
                    </div>
                </div>
            </>
        )
    }
    const Topbarhome = () => {
        return (
            <>
                <div className="topbarcontainer">
                    <div className="topbarleft">
                        <a href="/" className="logo">Socioface</a>
                    </div>
                    <div className="topbarcenter">
                        <div className="searchbar">
                            <Search className="searchicon" />
                            <input placeholder="search for friends, posts or video" className="searchinput" />
                        </div>
                    </div>
                    <div className="topbarright">
                        <div className="topbarlinks">
                            <Link className="topbarlink" to="/">Homepage</Link>
                            <Link className="topbarlink" to="/login">Timeline</Link>
                        </div>
                        <div className="topbaricons">
                            <div className="topbarIconitems">
                                <Person />
                                <span className="topbarIconbadges">1</span>
                            </div>
                            <div className="topbarIconitems">
                                <Chat />
                                <span className="topbarIconbadges">1</span>
                            </div>
                            <div className="topbarIconitems">
                                <Notifications />
                                <span className="topbarIconbadges">2</span>
                            </div>
                        </div>
                        <Link to="/Profile"> <img src="/assets/person/1.jpeg" alt="" className="topbarimg" /> </Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                {topbar ? <Topbarprofile /> : <Topbarhome />}
            </div>
        </div>
    );
}

export default Topbar;