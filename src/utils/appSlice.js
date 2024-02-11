import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name : "popup",
    initialState : {
        popupOpen :false,
    },
    reducers : {
        togglePopup :(state) =>{
            state.popupOpen = !state.popupOpen;
        },

    },

})

export const { togglePopup } = appSlice.actions;
export default appSlice.reducer;