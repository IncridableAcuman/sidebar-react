import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SidebarComponent';
import { UseTheme } from '../provider/ThemeProvider';
const Layout = () => {
  const {theme} = UseTheme();
  return (
    <div className='flex h-screen'>
        <div className={`w-72 ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900' } shrink-0 overflow-y-scroll overflow-x-hidden`}>
          <Sidebar/>
        </div>
        <div className='flex-1 p-6 overflow-y'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout