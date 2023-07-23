import axios from "axios";
import API from '../MainApi'
import Cookies from 'cookies-js'

const getBlogs = async () => {
    const res = await API.get(`/blog`);
    console.log(res);

    if (res.data) {
        localStorage.setItem('blogs', JSON.stringify(res.data))
    }

    return res.data;
}



const getBlog = async (id) => {
    const res = await API.get(`/blog/${id}`);

    console.log(res);

    if (res.data) {
        localStorage.setItem('currentBlog', JSON.stringify(res.data));
    }
    return res.data;
}





const blogService = {
    getBlogs,
    getBlog,


}


export default blogService;

