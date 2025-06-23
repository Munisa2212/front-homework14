
import Navbar from '../modules/Navbar'
import Sidebar from '../modules/Sidebar'
import Main from '../modules/Main'

const HomeRoute = () => {
  return (
    <div className='flex justify-between w-[1200px] mx-auto'>
      <Navbar/>
      <Main/>
      <Sidebar/>
    </div>
  )
}

export default HomeRoute