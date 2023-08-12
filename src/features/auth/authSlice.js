import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import authService from './authService';
import Cookies from 'cookies-js';
import { toast } from 'react-toastify';
// const userDefaultState = {
//     _id: null,
//     firstname: '',
//     lastname: '',
//     email: '',
//     mobile: '',
//     token: '',
// }

const initialState = { 
    user: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')): null,
    allUsers: [],
    userData: {},
    orders: [],
    wishlist: [],
    newCartItem: {},
    deletedCartItem: {},
    updatedCartItem: {},
    createdOrder: {},
    currentOrder: {},
    currentCart: [] ,
    userChats: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
 }


 
 export const getAllUsers = createAsyncThunk('auth/all-users', async (id, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.getAllUsers();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })


 export const fetchUserData = createAsyncThunk('auth/user-data', async (id, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.fetchUserData(id);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.login(user);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })

 export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.register(user);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })

 export const getOrders = createAsyncThunk('order/get-orders', async ( thunkAPI) => {
    try {
        console.log('hello');

        return await authService.getOrders();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })


 export const getOrdersByID = createAsyncThunk('order/get-userOrders', async (id, thunkAPI) => {
    try {
        console.log('hello');

        return await authService.getOrdersByID(id);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 })
 export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.logout(user);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }

 })




 export const forgotPassword = createAsyncThunk('auth/forgot-password', async (user, thunkAPI) => {
    try {
        console.log('hello')

        return await authService.forgotPassword(user);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }

 })
 export const resetPassword = createAsyncThunk('auth/reset-password', async (data, thunkAPI) => {
    try {

        return await authService.resetPassword(data);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }

 })
 

 export const getWishlist = createAsyncThunk('auth/get-wishlist', async (thunkAPI) => {
    
    try {

        return await authService.getWishlist();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });



 
 export const addToCart = createAsyncThunk('auth/add-cart', async (data, thunkAPI) => {
    
    try {

        return await authService.addToCart(data);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });


 export const getUserCart = createAsyncThunk('auth/get-cart', async (thunkAPI) => {
    
    try {

        return await authService.getUserCart();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });



 export const deleteCartItem = createAsyncThunk('auth/delete-cart-item', async (id, thunkAPI) => {
    
    try {

        return await authService.deleteCartItem(id);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });


 export const updateCartProductQuantity = createAsyncThunk('auth/update-cart-item', async (data, thunkAPI) => {
    
    try {

        return await authService.updateCartProductQuantity(data);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

 });


 export const createOrder = createAsyncThunk('auth/create-order', async (data, thunkAPI) => {
    
    try {

        return await authService.createOrder(data);
        
    } catch (error) {

        return thunkAPI.rejectWithValue(error);
        
    }

 });





 export const getAnOrder = createAsyncThunk('auth/get-order', async (id, thunkAPI) => {
    
    try {

        return await authService.getAnOrder(id);
        
    } catch (error) {

        return thunkAPI.rejectWithValue(error);
        
    }

 });




 export const updateUser = createAsyncThunk('auth/update-user', async (data, thunkAPI) => {
    
    try {

        return await authService.updateUser(data);
        
    } catch (error) {

        return thunkAPI.rejectWithValue(error);
        
    }

 });




 export const resetState = createAction('Reset-all');


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder ) => {
     builder




     .addCase(getAllUsers.pending,(state) => {state.isLoading = true }  )

    .addCase(getAllUsers.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.allUsers = action?.payload;
        // if (state?.isSuccess) {
        //     toast.success("Verification Done Successfully")
        // }
    })

    .addCase(getAllUsers.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.allUsers = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })



     .addCase(fetchUserData.pending,(state) => {state.isLoading = true }  )

    .addCase(fetchUserData.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.userData = action?.payload;
        // if (state?.isSuccess) {
        //     toast.success("Verification Done Successfully")
        // }
    })

    .addCase(fetchUserData.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.userData = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })




     .addCase(login.pending,(state) => {state.isLoading = true }  )

    .addCase(login.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.user = action?.payload;
        if (state?.isSuccess) {
            toast.success("Verification Done Successfully")
        }
    })

    .addCase(login.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })


    .addCase(register.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(register.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.user = action?.payload;
        if (state?.isSuccess) {
            toast.success("User Created Successfully")
        }
    })

    .addCase(register.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    }) 


    .addCase(logout.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(logout.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.user = action?.payload;
    })

    .addCase(logout.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    }) 



    .addCase(forgotPassword.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(forgotPassword.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.token = action?.payload;
        if (state?.isSuccess) {
            toast.success("Email Send Successfully")
        }
    })

    .addCase(forgotPassword.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.token = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })
    
    



    .addCase(resetPassword.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(resetPassword.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false;
        state.isSuccess = true;
        state.token = action?.payload;
        if (state?.isSuccess) {
            toast.success("Email Send Successfully")
        }
    })

    .addCase(resetPassword.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.token = null;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })



    .addCase(getOrders.pending,(state) => {state.isLoading = true }  )
    
    
    .addCase(getOrders.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.orders = action?.payload;
    })

    .addCase(getOrders.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.orders = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })




    
    .addCase(getWishlist.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(getWishlist.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        // state.message = 'Product Added To Wishlist !',

        state.wishlist = action?.payload?.wishlist;
    })

    .addCase(getWishlist.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.wishlist = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })



    .addCase(addToCart.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(addToCart.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.newCartItem = action?.payload;
        if (state?.isSuccess) {
            toast.success("Product Added To Cart Successfully")
        }
        
    })

    .addCase(addToCart.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.newCartItem = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })


    .addCase(getUserCart.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(getUserCart.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.currentCart = action?.payload;
    })

    .addCase(getUserCart.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.currentCart = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
    })




    .addCase(deleteCartItem.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(deleteCartItem.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.deletedCartItem = action?.payload;
        if (state?.isSuccess) {
            toast.success('Item deleted successfully')
        }
    })

    .addCase(deleteCartItem.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.deletedCartItem = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error('Something went error')
        }
    })






    .addCase(updateCartProductQuantity.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(updateCartProductQuantity.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.updatedCartItem = action?.payload;
        if (state?.isSuccess) {
            toast.success('Item updated successfully')
        }
    })

    .addCase(updateCartProductQuantity.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.updatedCartItem = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error('Something went error')
        }
    })



    
    .addCase(createOrder.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(createOrder.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.createdOrder = action?.payload;
        if (state?.isSuccess) {
            toast.success('Order Created successfully')
        }
    })

    .addCase(createOrder.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.createdOrder = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error('Something went error')
        }
    })






    .addCase(getAnOrder.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(getAnOrder.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.currentOrder = action?.payload;
        
    })

    .addCase(getAnOrder.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.currentOrder = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error("Something Went Error")
        }
        
    })





    .addCase(updateUser.pending,(state) => {state.isLoading = true }  )
    
     
    .addCase(updateUser.fulfilled,(state, action) => {
        state.isLoading = false ;
        state.isError = false ;
        state.isSuccess = true;
        state.updatedUser = action?.payload;
        if (state?.isSuccess) {
            toast.success('User Updated successfully')
        }
    })

    .addCase(updateUser.rejected,(state, action) => {
        state.isLoading = false ;
        state.isError = true;
        state.isSuccess = false;
        state.updatedUser = null;
        state.message = action.error;
        if (state?.isError) {
            toast.error('Something went error')
        }
    })








    .addCase(resetState, () => initialState)



    },
});



export default authSlice.reducer;


