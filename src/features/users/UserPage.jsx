import {useSelector} from "react-redux";
import {selectPostsByUser} from "../posts/postsSlice";
import {Link, useParams} from "react-router-dom";
import {selectUserById} from "./usersSlice";

function UserPage() {
    const {userId} = useParams();
    const userPosts =
        useSelector(state => selectPostsByUser(state, userId));
    const user =
        useSelector(state => selectUserById(state, userId));

    const postLinks = userPosts.map((post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`} dideo-checked="true">
                {post.title}
            </Link>
        </li>
    ));

    return (
        <section>
            <h2>{user.firstName + ' ' + user.lastName}</h2>

            <ul>
                {postLinks}
            </ul>
        </section>
    );
}

export default UserPage;