import { redirect } from "@tanstack/react-router";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASE_URL = `/api`; // 设置基础请求路径

// 定义响应数据的接口
interface ApiResponse<T = any> {
    code: number;
    msg: string;
    data?: T;
  }

  // 创建 axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL, // 设置基础请求路径
    timeout: 5000, // 设置请求超时时间
  });

  // 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 可以在这里添加认证 token
      const token = localStorage.getItem('token');
      if (token) {
        // 如果 headers 存在则使用，否则创建
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  // 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 假设后端的响应结构为 { code: number, message: string, data: T }
      const res: ApiResponse = response.data;
  
      if (res.code !== 200) {
        // 可以根据自定义错误码来进行错误处理
        console.error(res.msg || 'Error');
        return Promise.reject(new Error(res.msg || 'Error'));
      } else {
        return response.data; // 直接返回实际数据
      }
    },
    (error) => {
      // 对响应错误做点什么
      if (error.response) {
        // 服务器返回了响应码，但不在 2xx 范围内
        switch (error.response.status) {
          case 401:
            // 未授权，跳转登录页面
            throw redirect({ to: '/login' });
          case 403:
            // 禁止访问
            alert('没有权限访问该资源');
            break;
          default:
            alert(error.response.data.message || '服务器错误');
        }
      } else if (error.request) {
        // 请求已发送，但没有收到响应
        alert('请求超时，请重试');
      } else {
        // 发生了一些错误，触发了请求
        alert('请求错误: ' + error.message);
      }
      return Promise.reject(error);
    }
  );
  export function get<T = any>(url: string, params?: any, config: AxiosRequestConfig={}): Promise<ApiResponse<T>> {
    return instance.get(url, { params, ...config })
  }
  
  // 封装 post 方法
  export function post<T = any>(url: string, data?: any, config: AxiosRequestConfig={}): Promise<ApiResponse<T>>{
    return instance.post(url, data, { ...config })
  }
  