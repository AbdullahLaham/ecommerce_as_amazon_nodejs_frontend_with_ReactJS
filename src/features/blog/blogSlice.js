import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import blogService from './blogService';

import Cookies from 'cookies-js';


const initialState = { 
    blogs: [],

    
    currentBlog: {},

    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
 }



export const getBlogs = createAsyncThunk('blog/get-blogs', async ( thunkAPI) => {
    try {
        console.log('hello');

        return await blogService.getBlogs();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })


 export const getBlog = createAsyncThunk('blog/get-blog', async (id, thunkAPI) => {
    try {
        console.log('hello');

        return await blogService.getBlog(id);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })

 
 export const resetState = createAction('Reset-all');
const brandSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder ) => {
     builder

    .addCase(getBlogs.pending,(state) => {state.isLoading = true }  )
   
     
    .addCase(getBlogs.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.blogs = action?.payload;
    })

    .addCase(getBlogs.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.blogs = null;
        state.message = action.error;
    })





    .addCase(getBlog.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(getBlog.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.currentBlog = action?.payload;
    })

    .addCase(getBlog.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.currentBlog = null;
        state.message = action.error;
    })

    .addCase(resetState, () => initialState)
    },
});
export default brandSlice.reducer;


