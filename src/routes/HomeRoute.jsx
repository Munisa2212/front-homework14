import { Route, Routes } from 'react-router-dom'
import { paths } from '../hooks/Path'
import { Home } from '../pages'
import Navbar from '../modules/Navbar'
import Sidebar from '../modules/Sidebar'

const HomeRoute = () => {
  return (
    <div className='flex justify-between w-[1200px] mx-auto'>
      <Navbar/>
      <div className='w-[40%] border-x-[1px] h-[100vh]'>
          <Routes>
            <Route path={paths.home} element={<Home/>}/>
          </Routes>
      </div>
      <Sidebar/>
    </div>
  )
}

export default HomeRoute