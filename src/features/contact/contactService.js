import axios from "axios";
import API from '../MainApi'
import Cookies from 'cookies-js'

const postQuery = async (data) => {
    const res = await API.post(`/enquiry`, data);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}







const contactService = {
    postQuery,


}


export default contactService;

