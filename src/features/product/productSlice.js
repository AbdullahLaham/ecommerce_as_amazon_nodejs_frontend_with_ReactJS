import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import productService from './productService';
import Cookies from 'cookies-js';
import { toast } from 'react-toastify';


const initialState = { 
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')): [],
    addedToWishlist: {},
    currentProduct: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
 }



export const getProducts = createAsyncThunk('products/get-products', async (user, thunkAPI) => {
    try {
        console.log('hello')

        return await productService.getProducts();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });


 export const getAProduct = createAsyncThunk('products/get-product', async (id, thunkAPI) => {
    try {
        console.log('hello')

        return await productService.getAProduct(id);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });



 export const addToWishlist = createAsyncThunk('products/add-wishlist', async (productId, thunkAPI) => {
    
    try {

        return await productService.addToWishlist(productId);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });



 export const rateProduct = createAsyncThunk('products/rate-product', async (data, thunkAPI) => {
    
    try {

        return await productService.rateProduct(data);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });





 export const resetState = createAction('Reset-all');



const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder ) => {
     builder
     .addCase(getProducts.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(getProducts.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.products = action?.payload;
    })

    .addCase(getProducts.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.products = null;
        if (state?.isError) {
            toast.error('Something went error')
        }
        state.message = action.error;
    })


    .addCase(getAProduct.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(getAProduct.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.currentProduct = action?.payload;
    })

    .addCase(getAProduct.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.currentProduct = null;
        if (state?.isError) {
            toast.error('Something went error')
        }
        state.message = action.error;
    })



    .addCase(addToWishlist.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(addToWishlist.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        // state.message = 'Product Added To Wishlist !',
        if (state?.isSuccess) {
            toast.success('Product Added to wishlist successfully')
        }
        state.addedToWishlist = action?.payload;
    })

    .addCase(addToWishlist.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        if (state?.isError) {
            toast.error('Something went error')
        }
        state.addedToWishlist = null;
        state.message = action.error;
    })




    .addCase(rateProduct.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(rateProduct.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        // state.message = 'Product Added To Wishlist !',
        if (state.isSuccess) {
            toast.success("Product rated Successfully")
        }
        state.currentProduct = action?.payload;
    })

    .addCase(rateProduct.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        if (state?.isError) {
            toast.error('Something went error')
        }
        state.addedToWishlist = null;
        state.message = action.error;
    })








    .addCase(resetState, () => initialState)

    },
});
export default productSlice.reducer;




