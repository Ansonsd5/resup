import { createSlice } from "@reduxjs/toolkit";

const landingSlice = createSlice({
    name : 'landing',
    initialState : {},
    reducers : {
        saveLandingDetail(state,action){
            return  action.payload;
        },
        updateLandingDetails(state,action){
            return action.payload
        }
    }


})

export const {saveLandingDetail,updateLandingDetails} = landingSlice.actions;

export default landingSlice.reducer;
