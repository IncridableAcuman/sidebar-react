import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SidebarComponent';
import { UseTheme } from '../provider/ThemeProvider';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
const Layout = () => {
  const { theme, toggleTheme } = UseTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className={` md:hidden fixed w-full h-16 top-0 left-0 ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} shadow
         flex items-center justify-between p-4 z-50`}>

        <div className="flex items-center gap-3">
          <Menu className='cursor-pointer text-gray-600 hover:text-gray-400 transition duration-300'
            onClick={() => setOpen(true)} />
          <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
        </div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Moon className="cursor-pointer text-gray-500" /> : <Sun className="cursor-pointer text-gray-500" />}
        </button>
      </div>

      <AnimatePresence>

        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className='fixed inset-0 bg-black z-40 md:hidden'
            />
              <motion.aside
              initial={{x: '-100%'}}
              animate={{x:0}}
              exit={{x: '-100%'}}
              transition={{type:'spring',stiffness:260,damping:25}}
              className={`fixed top-0 left-0 z-50 w-72 h-screen md:hidden ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
              >
                <div className="flex justify-end p-4">
                  <X onClick={() => setOpen(false)} className='cursor-pointer' />
                </div>

                <Sidebar/>
              </motion.aside>

          </>
        )}

      </AnimatePresence>

      <aside className={`hidden md:block w-72 shrink-0 overflow-y-auto h-screen
        ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} h-screen pt-16 md:p-0`}>
        <Sidebar />
      </aside>

      <main className='flex-1 h-screen overflow-y-auto'>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout