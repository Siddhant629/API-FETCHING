import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../features/HomeSlice";

export const store = configureStore({
    
        reducer: {
          counter: HomeSlice,
        },
 
})