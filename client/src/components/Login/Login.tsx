import { FormEvent, useState } from 'react'
import { useAppDispatch } from 'store'
import { loginUser } from 'store/auth/actionCreators'

const Login = () => {
  const dispatch = useAppDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(loginUser({ login, password }))
  }

  return (
    <div>
      <span>Login</span>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
        onSubmit={handleSubmit}
      >
        <input type='text' value={login} onChange={e => setLogin(e.target.value)} />
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login
