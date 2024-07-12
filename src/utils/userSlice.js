import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
    
        addUser: (state, action) => {
           return action.payload // Adjust logic as needed
        },
        removeUser: (state,action) => {
            return null; // Adjust logic as needed
        },
    }
});

export const {  addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
