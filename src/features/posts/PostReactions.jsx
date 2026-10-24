import {useDispatch} from "react-redux";
import {increaseReaction} from "./postsSlice";

const reactionsIcon = {
    eyes: '👀',
    heart: '❤️',
    hooray: '🎉',
    rocket: '🚀',
    thumbsUp: '👍'
};

function PostReactions({reactions, postId}) {
    const dispatch = useDispatch();

    const handleIncrease = (reaction, postId) => {
        dispatch(increaseReaction({reaction, postId}));
    }

    const reactionsBtn =
        Object.keys(reactions).map(reaction => (
            <button type="button" className="muted-button reaction-button"
                    key={reaction} onClick={() => handleIncrease(reaction, postId)}>
                {reactionsIcon[reaction]} {reactions[reaction]}
            </button>
        ));

    return (
        <div>
            {reactionsBtn}
        </div>
    );
}

export default PostReactions;