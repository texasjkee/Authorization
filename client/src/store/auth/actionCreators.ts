import { Dispatch } from '@reduxjs/toolkit'
import { ILoginRequest } from 'api/auth/types'
import { history } from '../../utils/history'
import api from '../../api'
import { store } from 'store'
import {
  loginStart,
  loginFailure,
  loginSuccess,
  logoutSuccess,
  loadProfileSucess,
  loadProfileFailure,
  loadProfileStart
} from './authReducer'

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart())

      const response = await api.auth.login(data)

      dispatch(loginSuccess(response.data.accessToken))
      dispatch(getProfile())
    } catch (e: any) {
      console.error(e)

      dispatch(loginFailure(e.message))
    }
  }

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout()

      dispatch(logoutSuccess())

      history.push('/')
    } catch (e: any) {
      console.error(e)
    }
  }

export const getProfile =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart())

      const res = await api.auth.getProfile()

      dispatch(loadProfileSucess(res.data))
    } catch (e: any) {
      console.error(e)
      dispatch(loadProfileFailure(e.message))
    }
  }

export const getAccessToken =
  () =>
  (dispatch: Dispatch<any>): string | null => {
    try {
      const accessToken = store.getState().auth.authData.accessToken

      return accessToken
    } catch (e) {
      console.error(e)

      return null
    }
  }
