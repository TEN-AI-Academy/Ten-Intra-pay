import { Outlet } from 'react-router-dom'
import Footer from './footer'
import NavBar from './navBar/navBar'
import ContactModal from '../ContactModal'

function Layout () {
  return (
    <div className='overflow-hidden relative'>
        <ContactModal />
      <NavBar />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
