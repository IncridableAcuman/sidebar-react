import { UseTheme } from "../provider/ThemeProvider"
import { Github, Linkedin, Instagram, Code2, Globe, Send, Mail, Phone, Sun, Moon } from 'lucide-react'

const SidebarComponent = () => {
  const { theme, toggleTheme } = UseTheme()
  const isDark = theme === 'dark'

  const networks = [
    { name: 'Email',      path: 'mailto:abdusharipovizzat03@gmail.com', icon: <Mail size={16} /> },
    { name: 'Phone',      path: 'tel:+998507022171',                    icon: <Phone size={16} /> },
    { name: 'LinkedIn',   path: 'https://www.linkedin.com/in/izzatbek-abdusharipov/', icon: <Linkedin size={16} /> },
    { name: 'GitHub',     path: 'https://github.com/IncridableAcuman',                 icon: <Github size={16} /> },
    { name: 'LeetCode',   path: 'https://leetcode.com/u/abdusharipovizzat03/',          icon: <Code2 size={16} /> },
    { name: 'Kep',        path: 'https://kep.uz/users/abdusharipovizzat03',             icon: <Globe size={16} /> },
    { name: 'Telegram',   path: 'https://t.me/izzatbekdeveloper',                       icon: <Send size={16} /> },
    { name: 'Instagram',  path: 'https://www.instagram.com/izzatbekdeveloper/',        icon: <Instagram size={16} /> },
  ]

  return (
    <div className={`relative flex flex-col h-full overflow-hidden transition-all duration-500 font-sans border-r ${
      isDark 
        ? 'bg-[#0a0a0a] border-zinc-800/80 text-zinc-300' 
        : 'bg-white border-zinc-200 text-zinc-700'
    }`}>
      
      {/* Theme toggle button */}
      <div className="relative z-10 flex justify-end p-5 pb-0">
        <button 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`w-9 h-9 rounded-md flex items-center justify-center transition-all duration-300 border ${
            isDark 
              ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
              : 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black'
          }`}>
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>

      {/* Avatar & Info */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-4 pb-6">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-light tracking-widest mb-4 border ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
            : 'bg-zinc-100 border-zinc-200 text-zinc-800'
        }`}>
          IA
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-zinc-400' : 'bg-emerald-500'}`} />
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Available
          </span>
        </div>

        <h1 className={`font-medium text-lg tracking-wide text-center ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
          Izzatbek Abdusharipov
        </h1>
        <p className={`text-xs uppercase tracking-widest mt-2 font-medium text-center ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          Full Stack Developer
        </p>
      </div>

      <div className={`h-px mx-6 mb-4 bg-linear-to-r ${
        isDark 
          ? 'from-transparent via-zinc-800 to-transparent' 
          : 'from-transparent via-zinc-200 to-transparent'
      }`} />

      {/* Nav */}
      <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {networks.map((item, i) => (
          <a key={i} href={item.path} target="_blank" rel="noreferrer"
            className={`group flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-300 ${
              isDark ? 'hover:bg-zinc-900' : 'hover:bg-zinc-100'
            }`}>
            <span className={`transition-colors ${
              isDark ? 'text-zinc-500 group-hover:text-zinc-200' : 'text-zinc-400 group-hover:text-zinc-900'
            }`}>
              {item.icon}
            </span>
            <span className={`flex-1 text-sm font-light tracking-wide transition-colors ${
              isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900'
            }`}>
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      {/* Languages */}
      <div className="px-8 pb-4">
         <p className={`text-[10px] uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Languages</p>
         <div className={`space-y-2 text-xs font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <div className="flex justify-between"><span>Uzbek</span><span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>Native</span></div>
            <div className="flex justify-between"><span>English</span><span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>A2-B1</span></div>
            <div className="flex justify-between"><span>Russian</span><span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>A1</span></div>
         </div>
      </div>

      {/* Footer */}
      <div className={`relative z-10 px-8 py-5 text-[10px] leading-relaxed border-t tracking-wider ${
        isDark ? 'border-zinc-900 text-zinc-600' : 'border-zinc-100 text-zinc-400'
      }`}>
        © {new Date().getFullYear()} <br/> Crafted with minimalism.
      </div>
    </div>
  )
}

export default SidebarComponent