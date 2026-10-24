import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectPostById, selectPostIds} from "./postsSlice";
import PostReactions from "./PostReactions";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import {Link} from "react-router-dom";
import {useEffect} from "react";


function PostExcerpt({postId}) {
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <article className="post-excerpt">
            <h3>{post.title}</h3>

            <div>
                <PostAuthor userId={post.user}/>
                <TimeAgo date={post.date}/>
            </div>

            <p className="post-content">
                {post.content.length >= 70 ? post.content.substring(0, 70) + "..." : post.content}
            </p>

            <PostReactions reactions={post.reactions} postId={post.id}/>
            <Link className="button muted-button" to={`/posts/${post.id}`}
               dideo-checked="true">
                View Post
            </Link>
        </article>
    );
}

function PostsList() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    const postIds = useSelector(selectPostIds);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    let content;

    if (status === 'loading') {
        content = <div className="loader">Loading ...</div>
    } else if (status === 'success') {
        content = postIds.map(id => <PostExcerpt postId={id} key={id}/>);
    } else if (status === 'error') {
        content = <div className="error">{error}</div>;
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    );
}

export default PostsList;