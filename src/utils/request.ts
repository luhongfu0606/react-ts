import axios from "axios";

const request = axios.create({
    baseURL: '/api',
    timeout: 400000,
})

// 添加请求拦截器
request.interceptors.request.use(
    config => {
        // 跨域
        // Headers:['Access-Control-Allow-Origin':'*
        // config.headers = {
        //     'Access-Control-Allow-Origin': '*'
        // }
        return config;

    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
request.interceptors.response.use(
    response => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么

        return response.data;
    }, error => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });

export default request
