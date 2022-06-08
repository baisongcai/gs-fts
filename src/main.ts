import 'normalize.css'
import './assets/css/index.less'
import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
import router from './router'
// import '@/service/axios_demo'
// import scRequest from './service'

const app = createApp(App)
registerApp(app)
app.use(router).mount('#app')

// scRequest.request({
//   url: '',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求数据')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独返回数据')
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// scRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
