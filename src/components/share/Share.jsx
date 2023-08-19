import "./Share.css"
import { PhotoLibrary, Label, Room, EmojiEmotions } from "@mui/icons-material"
const Share = () => {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
                    <input placeholder="What's in your mind saifali " className="sharesearchinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">
                            <PhotoLibrary htmlColor="tomato" className="shareicon" />
                            <span className="shareoptiontext">Photo or video</span>
                        </div>
                        <div className="shareoption">
                            <Label htmlColor="blue" className="shareicon" />
                            <span className="shareoptiontext">Tag</span>
                        </div>
                        <div className="shareoption">
                            <Room htmlColor="green" className="shareicon" />
                            <span className="shareoptiontext">Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareicon" />
                            <span className="shareoptiontext">Feelings</span>
                        </div>
                        <button className="sharebutton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;
<div>
    hey its share
</div>