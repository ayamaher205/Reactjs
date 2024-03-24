import { createSlice } from '@reduxjs/toolkit'

const UserProfile = createSlice( {
    name: "userInfo",
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            state.userInfo = action.payload;
        }
    }

})

export const { addUser } = UserProfile.actions;
export default UserProfile.reducer
