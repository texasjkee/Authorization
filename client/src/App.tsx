import { Header } from 'components'
import { Dashboard } from 'pages/Dashboard'
import { Main } from 'pages/Main'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { TRootState } from 'store'

export const App = () => {
  const isLoggedIn = useSelector((state: TRootState) => !!state.auth.authData.accessToken)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to='/' />} />
      </Routes>
    </Router>
  )
}
