import Login from 'components/Login/Login'
import { useSelector } from 'react-redux'
import { TRootState, useAppDispatch } from '../store/index'
import { logoutUser, getProfile } from 'store/auth/actionCreators'

export const Main = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector((state: TRootState) => !!state.auth.authData.accessToken)

  const renderProfile = () => (
    <div>
      <div> You have successfully loggin in </div>
      <button onClick={() => dispatch(logoutUser())}>Log out</button>
      <button onClick={() => dispatch(getProfile())}>Update profile</button>
    </div>
  )

  return (
    <div>
      <h2>Main</h2>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  )
}
