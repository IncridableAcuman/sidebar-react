import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SidebarComponent';
import { UseTheme } from '../provider/ThemeProvider';
const Layout = () => {
  const {theme} = UseTheme();
  return (
    <div className='flex h-screen overflow-hidden'>
        <aside className={`hidden md:block w-72 shrink-0 overflow-y-auto ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <Sidebar/>
        </aside>
        <main className='flex-1 h-screen overflow-y-auto'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout