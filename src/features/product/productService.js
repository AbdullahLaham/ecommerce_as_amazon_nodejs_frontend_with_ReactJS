import axios from "axios";
import API from '../MainApi'
import Cookies from 'cookies-js'

const getProducts = async (data) => {
    let res;
    let query = `/product?`;
   
    if (data?.brand && data?.brand !== 'all') {
        query += `brand=${data?.brand}&&`
    }
    if (data?.category && data?.category !== 'all') {
        query += `category=${data?.category}&&`
    }
    if (data?.sort && data?.sort !== 'all') {
        query += `sort=${data?.sort}&&`
    }
    
    res = await API.get(query);

    console.log(res);

    if (res.data) {
        localStorage.setItem('products', JSON.stringify(res.data))
    }

    return res.data;
}

const getAProduct = async (id) => {
    const res = await API.get(`/product/${id}`);
    console.log(res);

    if (res.data) {
        localStorage.setItem('currentProduct', JSON.stringify(res.data));
        return res.data;
    }

    return res.data;
}

const addToWishlist = async (productId) => {
    const res = await API.put(`/product/wishlist`, {productId});
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}


const rateProduct = async (data) => {
    const res = await API.put(`product/rating`, data);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}




const productService = {
    getProducts,
    addToWishlist,
    getAProduct,
    rateProduct
}


export default productService;
