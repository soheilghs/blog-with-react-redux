import {configureStore} from '@reduxjs/toolkit';
import postsSlice from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;