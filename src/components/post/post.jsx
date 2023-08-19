import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../data";
import { useState } from "react";
import { ThumbDown } from "@mui/icons-material";
// import { useState } from "react";
const Post = ({ post }) => {
    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false);
    const [isdisliked, setdisliked] = useState(true);
    const likehandeler = () => {
        setlike(isliked ? like - 1 : like + 1)
    }
    const dislikehandeler = () => {
        setlike(isdisliked ? like - 1 : like + 1)
    }
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt=" " className="postprofile" />
                        <span className="postusername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                        <MoreVert />
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext"> {post?.desc} </span>
                    <img src={post.photo} alt="" className="post1img" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="/assets/like.png" alt="" className="likeicon" onClick={likehandeler} />
                        {/* <img src="/assets/heart.png" alt="" className="likeicon" onClick={dislikehandeler} /> */}
                        <ThumbDown htmlColor="Red" className="likeicon" onClick={dislikehandeler} />
                        <span className="postlikecount"> {like} people liked it </span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;