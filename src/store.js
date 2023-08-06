import { configureStore } from '@reduxjs/toolkit';

import authedUser from './components/features/auth/authedUserSlice';

// About configureStore!!!
// It combined reducers into the root reducer function, which will handle a root state
// It created a Redux store using that root reducer
// It automatically added the thunk middleware
// It automatically added more middleware to check for common mistakes like accidentally mutating the state
// It automatically set up the Redux DevTools Extension connection

const store = configureStore({
    reducer: {
        authedUser,
    }
});

export default store