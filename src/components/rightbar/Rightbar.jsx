import "./Rightbar.css"
import { Users } from "../../data";
import Online from "../online/Online";
const Rightbar = ({ profile }) => {
    const Homerightbar = () => {
        return (
            <>
                <div className="birthdaycontainer">
                    <img src="assets/gift.png" alt="" className="birthdayimg" />
                    <span className="birthdaytext"><b>Aryan</b> and <b>3 other friends</b> have birhtday today</span>
                </div>
                <img src="assets/pizza.jpg" alt="" className="rightbaradd" />
                <hr className="addhr"></hr>
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="rightbarfriendlist">
                    {Users.map(u => <Online key={u.id} user={u} />)}
                </ul>
            </>
        );
    }
    const Profilerightbar = () => {
        return (
            <>
                <h4 className="rightbartitle">User Information</h4>
                <div className="rightbarinfo">
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">City:</span>
                        <span className="rightbarinfovalue">Jodhpur</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">From:</span>
                        <span className="rightbarinfovalue">Rajsthan</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">Relationship:</span>
                        <span className="rightbarinfovalue">Single</span>
                    </div>
                </div>
                <h4 className="rightbartitle">User followings</h4>
                <div className="rightbarfollowings">
                    <div className="rightbarfollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname"> Safak Kocaoglu</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname"> Janell Shrum</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname"> Alex Durden</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname"> Dora Hawks</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname"> Thomas Holden</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
                {profile ? <Profilerightbar /> : <Homerightbar />}
            </div>
        </div>
    );
}

export default Rightbar;