import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {}, 
  };

 
const formSlice = createSlice({
    name : 'form',
    initialState,
    reducers :{
        updateFormData(state,action){
            const { fieldName, value } = action.payload;
            state.formData[fieldName] = value;
            
            

        }
    }

})

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;