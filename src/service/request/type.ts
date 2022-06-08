import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface SCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SCRequestInterceptors<T>
  showLoading?: boolean
}
