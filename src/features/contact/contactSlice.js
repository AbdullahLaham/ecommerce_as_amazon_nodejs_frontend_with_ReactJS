import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import contactService from './contactService';
import Cookies from 'cookies-js';
import { toast } from 'react-toastify';


const initialState = { 
    blogs: [],
    postedQuery: {},
    
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
 }



export const postQuery = createAsyncThunk('blog/get-blogs', async (data, thunkAPI) => {
    try {
        console.log('hello');

        return await contactService.postQuery(data);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })



 
 export const resetState = createAction('Reset-all');
const brandSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder ) => {
     builder

    .addCase(postQuery.pending,(state) => {state.isLoading = true }  )
   
     
    .addCase(postQuery.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.postedQuery = action?.payload;
        if (state?.isSuccess === true) {
            toast.success("Contact Form Submitted Successfully")
        }
    })

    .addCase(postQuery.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.postedQuery = null;
        state.message = action.error;
        if (state?.error === true) {
            toast.error("Some thing went wrong")
        }
    })





    .addCase(resetState, () => initialState)
    },
});
export default brandSlice.reducer;


