import { AxiosPromise } from 'axios'
import Endpoints from '../endpoints'
import { axiosInstance } from '../instance'
import { ILoginRequest, ILoginResponse } from './types'

const BASE_URL = 'http://localhost:3000'

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(`${BASE_URL}${Endpoints.AUTH.LOGIN}`, params)

export const logout = (): AxiosPromise => axiosInstance.get(`${BASE_URL}${Endpoints.AUTH.LOGOUT}`)

export const getProfile = (): AxiosPromise =>
  axiosInstance.get(`${BASE_URL}${Endpoints.AUTH.PROFILE}`)
