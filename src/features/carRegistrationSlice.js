import { createSlice } from "@reduxjs/toolkit";

export const carRegistrationSlice = createSlice({
    name: "driverDetails",
    initialState:{
        driverDetails:null,
    },
    reducers: {
        submitDriverDetails : (state,action) => {
            state.driverDetails = action.payload;
        },
        clearDriverData : (state) => {
            state.driverDetails = null
        }
    }
})

export const {submitDriverDetails,clearDriverData} = carRegistrationSlice.actions;

export const selectDriver = (state) => state.driverDetails;

export default carRegistrationSlice.reducer;