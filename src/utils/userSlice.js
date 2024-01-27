import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        addUserDetails : (state,action) =>{
          return  action.payload;

        }

    }


});

export const { addUserDetails } = userSlice.actions;
export default userSlice.reducer;

