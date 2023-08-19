import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
    return (
        < >
            <Topbar topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileuserimg" />
                        </div>
                        <div className="profileinfo">
                            <h4 className="profileinfoname">Saifali</h4>
                            <span className="profileinfodesc">hello my friends</span>
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;