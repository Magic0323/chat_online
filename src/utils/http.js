import axios from 'axios';

axios.defaults.baseURL =
// 'https://magic-7gmqd9iafbefa003-1316423047.ap-shanghai.app.tcloudbase.com/chat_online_serverless'
  'http://localhost:8888';
  // 'http://localhost:9999';

axios.defaults.responseType = 'json';
axios.defaults.timeout = 100000;

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    let resData = response.data;
    // 以下无数据的判断对取号接口适配
    if (!resData) {
      // return Promise.reject('数据格式不对', response);
      return resData;
    } else {
      return resData;
    }
    // if (resData.code === 200 || resData.code === '200') {
    //   return resData.data;
    // } else {
    //   return Promise.reject(resData.message);
    // }
  },
  function(error) {
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') >= 0
    ) {
      return Promise.reject('请求超时');
    } else {
      return Promise.reject(error.message);
    }
  },
);

const get = (url, params) => {
  return axios({
    method: 'get',
    withCredentials: true,
    url,
    params,
    data: undefined,
  });
};

const post = (url, data) => {
  return axios({
    method: 'post',
    withCredentials: true,
    url,
    pararms: undefined,
    data,
  });
};
export { get, post };
