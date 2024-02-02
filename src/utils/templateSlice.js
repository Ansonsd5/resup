import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const templateSlice = createSlice({
    name : 'template',
    initialState,
    reducers : {
        addTemplate(state,action){
       return action.payload
        }
    }


});

export const  { addTemplate } = templateSlice.actions;
export default templateSlice.reducer;
