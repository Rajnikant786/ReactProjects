import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import carRegistrationReducer from "../features/carRegistrationSlice";

export default configureStore({
    reducer:{
        userDetails: userReducer,
        driverDetails: carRegistrationReducer
    }
})