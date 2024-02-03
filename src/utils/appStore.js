import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import formReducer from './formSlice';
import templateReducer from './templateSlice';
import landingReducer from './landingSlice';


const appStore =  configureStore({
    reducer: {
        user : userReducer,
        form: formReducer,
        template : templateReducer,
        landing : landingReducer,

    },
  })


  export default appStore;