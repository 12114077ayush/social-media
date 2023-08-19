import Post from "../post/post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../data";

const Feed = () => {
    return (
        <div className="feedbar">
            <div className="feedwrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}

            </div>
        </div>
    );
}

export default Feed;
