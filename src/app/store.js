import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/product/productSlice';
import blogReducer from '../features/blog/blogSlice';
import contactReducer from '../features/contact/contactSlice';
import chatReducer from '../features/chat/chatSlice';
// import messageReducer from '../features/me';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    products: productReducer,
    blog: blogReducer,
    contact: contactReducer,
    chat: chatReducer,
    // message: messageReducer,
  },
});
