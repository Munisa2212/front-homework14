import { Route, Routes } from 'react-router-dom'
import { paths } from '../hooks/Path'
import { Login } from '../pages'

const LoginRoute = () => {
  return (
    <Routes>
        <Route path={paths.login} element={<Login/>}/>
    </Routes>
  )
}

export default LoginRoute