import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/SidebarComponent'
import { UseTheme } from '../provider/ThemeProvider'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Layout = () => {
  const { theme } = UseTheme()
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-zinc-50'
    }`}>

      {/* ── Mobile topbar ── */}
      <header className={`md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 border-b backdrop-blur-md transition-colors duration-500 ${
        isDark 
          ? 'border-zinc-800/80 bg-[#0a0a0a]/90 text-zinc-200' 
          : 'border-zinc-200 bg-white/90 text-zinc-800'
      }`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${
              isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-black'
            }`}>
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-sm font-medium tracking-wide">
            I. Abdusharipov
          </h1>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 left-0 z-50 w-72 h-screen md:hidden border-r shadow-2xl ${
                isDark ? 'border-zinc-800 bg-[#0a0a0a]' : 'border-zinc-200 bg-white'
              }`}>
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={() => setOpen(false)}
                  className={`w-8 h-8 flex items-center justify-center transition-colors ${
                    isDark ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-black'
                  }`}>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <Sidebar />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Desktop sidebar ── */}
      <aside className={`hidden md:flex flex-col w-72 shrink-0 h-screen overflow-y-auto border-r transition-colors duration-500 ${
        isDark ? 'border-zinc-800/80 bg-[#0a0a0a]' : 'border-zinc-200 bg-white'
      }`}>
        <Sidebar />
      </aside>

      {/* ── Main content ── */}
      <main className={`flex-1 h-screen overflow-y-auto pt-16 md:pt-0 transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout