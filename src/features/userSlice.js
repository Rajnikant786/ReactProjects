import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userDetails",
    initialState:{
        userDetails:null,
    },
    reducers: {
        login : (state,action) => {
            state.userDetails = action.payload;
        },
        logout : (state) => {
            state.userDetails = null
        }
    }
})

export const {login,logout} = userSlice.actions;

export const selectUser = (state) => state.userDetails;

export default userSlice.reducer;