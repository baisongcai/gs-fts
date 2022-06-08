import axios, { AxiosResponse } from 'axios'
axios.defaults.baseURL = 'http://httpbin.org'
axios
  .get('/get', {
    params: {
      key: '6dc7ca9ce4cb7808e4610e3a59db989c'
    }
  })
  .then((res: AxiosResponse) => {
    console.log(res)
  })

axios
  .post('/post', {
    data: {
      name: 'bsc',
      nl: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use(
  (config) => {
    console.log('请求成功')
    return config
  },
  (err) => {
    console.log('请求发生错误')

    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
