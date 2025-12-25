import axios from 'axios';
import { ref } from 'vue';
// import useCounterStore from '/src/stores/logon'
// const store = useCounterStore()
class Http {
  constructor(baseURL = '/api') {
    this.instance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {

      },
      timeout: 12000,
    });
    this.interceptors();
  }

  interceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
          config.headers.Authorization = token
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        errTip(error);
        return Promise.reject(error);
      }
    );
  }

  get(url, params, config) {
    return this.request({
      method: 'get',
      url,
      params,
      ...config,
    });
  }

  post_urlencoded(url, data, config) {
    return this.request({
      method: 'post',
      url,
      data,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      ...config,
    });
  }
  post(url, data, config) {
    return this.request({
      method: 'post',
      url,
      data,
      ...config,
    });
  }

  delete2(url, data, config) {
    return this.request({
      method: 'delete',
      url,
      data,
      ...config,
    });
  }
  delete(url, params, config) {
    return this.request({
      method: 'delete',
      url,
      params,
      ...config,
    });
  }

  put(url, data, config) {
    return this.request({
      method: 'put',
      url,
      data,
      headers: { 'content-type': 'application/json' },
      ...config,
    });
  }

  json(url, data, config) {
    return this.request({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });
  }

  async request(options) {
    const loading = ref(true);
    const data = ref(null);
    const errMsg = ref(null);
    try {
      const response = await this.instance(options);
      data.value = response;

    } catch (e) {
      errMsg.value = e.message || '未知错误';
    } finally {
      loading.value = false;
    }
    return {
      loading,
      data,
      errMsg,
    };
  }
}

function errTip(error, msg = '未知错误') {
  const tip = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: `请求地址出错${error?.response?.config?.url}`,
    405: `请求方式不允许`,
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP版本不受支持',
  };
  console.log(tip[error?.response?.status] || msg);
}

export default new Http();
