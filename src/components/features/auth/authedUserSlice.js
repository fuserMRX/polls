import { createSlice } from '@reduxjs/toolkit';

const authedUserSlice = createSlice({
    name: 'authedUser',
    initialState: 'Tyler',
    reducers: {
        getAuthedUser(state, action) {
            return action.id
        }
    }
});

export const { getAuthedUser } = authedUserSlice.actions;
export default authedUserSlice.reducer;