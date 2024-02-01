import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateData : {},
}

const templateSlice = createSlice({
    name : 'template',
    initialState,
    reducers : {
        addTemplate(state,action){
            const {key, value} = action.payload
       return {
        ...state,
        templateData : {
            ...state.templateData,
            [key] :value

        }
       }
        }
    }


});

export const  { addTemplate } = templateSlice.actions;
export default templateSlice.reducer;
