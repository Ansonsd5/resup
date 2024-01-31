import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import formReducer from './formSlice';
import templateReducer from './templateSlice';


const appStore =  configureStore({
    reducer: {
        user : userReducer,
        form: formReducer,
        template : templateReducer

    },
  })


  export default appStore;