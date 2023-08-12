import axios from "axios";
import API from '../MainApi'
import Cookies from 'cookies-js'


const getAllUsers = async () => {
    const res = await API.get(`/user/admin-users`);
    console.log(res);
    
    return res.data;
}



const fetchUserData = async (id) => {
    const res = await API.get(`/user/${id}`);
    console.log(res);
    
    return res.data;
}


const login = async (userData) => {
    const res = await API.post(`/user/login`, userData);
    console.log(res);
    if (res.data) {
        localStorage.setItem('auth',  JSON.stringify(res.data))
    }

    return res.data;
}


const register = async (userData) => {
    const res = await API.post(`/user/register`, userData);
    console.log(res);
    if (res.data) {
        localStorage.setItem('auth',  JSON.stringify(res.data))
    }

    return res.data;
}




const logout = async (userData) => {
    const res = await API.post(`/user/logout`, userData);
    console.log(res);
    if (res.data) {
        localStorage.removeItem('auth');
    }

    return res.data;
}



const forgotPassword = async (data) => {
    const res = await API.post(`/user/forgot-password-token`, data);
    console.log(res);
    if (res.data) {
        return res.data;
    }

    return res.data;
}
const resetPassword = async (data) => {
    const {token, password} = data ;
    const res = await API.put(`/user/reset-password/${token}`, {password});
    console.log(res);
    if (res.data) {
        return res.data;
    }

    return res.data;
}


const getOrders = async () => {
    const res = await API.get(`/user/get-orders`);
    console.log(res);

    if (res.data) {
        localStorage.setItem('orders', JSON.stringify(res.data))
    }

    return res.data;
}



const getOrdersByID = async (id) => {
    const res = await API.get(`/user/get-orders/${id}`);
    console.log(res);
    
    if (res.data) {
        localStorage.setItem('userOrders', JSON.stringify(res.data))
    }

    return res.data;
}



const getWishlist = async () => {
    const res = await API.get(`/user/wishlist`);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



const addToCart = async (data) => {
    const res = await API.post(`/user/cart`, data);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



const getUserCart = async () => {
    const res = await API.get(`/user/cart`);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}


const deleteCartItem = async (id) => {
    const res = await API.delete(`/user/cart/${id}`);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



const updateCartProductQuantity = async (data) => {
    const {id, quantity} = data;
    const res = await API.put(`/user/cart/${id}`, {quantity});
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}




const createOrder = async (data) => {

    const res = await API.post(`/user/order/create-order`, data);
    
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



const getAnOrder = async (id) => {

    const res = await API.get(`/user/order/${id}`);
    
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



const updateUser = async (data) => {

    const res = await API.put(`/user/edit-user`, data);
    
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}



// const userChats = async (userId) => {

//     const res = await API.get(`/user/chat/${userId}`);
    
//     console.log(res);

//     if (res.data) {
//         return res.data;
//     }

//     return res.data;
// }



const authService = {
    fetchUserData,
    login,
    logout,
    register,
    getAllUsers,
    getOrders,
    getOrdersByID,
    getWishlist,
    addToCart,
    getUserCart,
    deleteCartItem,
    updateCartProductQuantity,
    createOrder,
    getAnOrder,
    updateUser,
    forgotPassword,
    resetPassword,
}


export default authService;

