import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
//TODO: what is it?
// import logger from 'redux-logger'
import authReducer from './auth/authReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
  // .concat([logger])
})

export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
