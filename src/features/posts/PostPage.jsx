import {Link, useParams} from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import PostReactions from "./PostReactions";
import {useSelector} from "react-redux";
import {selectPostById} from "./postsSlice";

function PostPage() {
    const {postId} = useParams();
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>

                <div>
                    <PostAuthor userId={post.user}/>
                    <TimeAgo date={post.date}/>
                </div>

                <p className="post-content">
                    {post.content}
                </p>

                <PostReactions reactions={post.reactions} postId={post.id}/>

                <Link className="button muted-button" to={`/posts/${post.id}`}
                      dideo-checked="true">
                    View Post
                </Link>
            </article>
        </section>
    );
}

export default PostPage;