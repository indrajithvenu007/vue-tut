import axios from "axios";
import { API_URL } from '@/common/config';

const config = {
    baseURL: API_URL,
    headers: {},
    withCredentials: false,
    crossDomain: true,
};

const $http = axios.create(config);

const post = async (url, payload) => {
    try {
        return await $http.post(url, payload)
    } catch (e) {
        return e.response;
    }
}

export {
    post
};
