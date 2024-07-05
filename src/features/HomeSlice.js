import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const getAllData = createAsyncThunk(
  'data/fetchData',
  async (counter, thunkAPI) => {
    const response = await axios.get(`https://api.github.com/users`);
    return response.data;
  }
);


export const HomeSlice = createSlice({
  name: "counter",
  initialState:{
    users: [],
    loading: false, 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;  
      })
      .addCase(getAllData.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
      
  
},

});

export default HomeSlice.reducer;