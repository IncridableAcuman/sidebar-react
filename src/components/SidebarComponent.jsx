import { Code, Github, Globe, Instagram, Linkedin, Moon, Sun, University } from "lucide-react"
import { UseTheme } from "../provider/ThemeProvider"

const SidebarComponent = () => {
    const {theme,toggleTheme} = UseTheme();
    const networks = [
        { name: 'LinkedIn', path: "https://www.linkedin.com/in/izzatbek-abdusharipov/", icons: <Linkedin /> },
        { name: 'Github', path: 'https://github.com/IncridableAcuman', icons: <Github /> },
        { name: 'Instagram', path: 'https://www.instagram.com/izzatbekdeveloper/', icons: <Instagram /> },
        { name: 'Leetcode', path: 'https://leetcode.com/u/abdusharipovizzat03/', icons: <Code /> },
        { name: 'Kep', path: '/https://kep.uz/users/abdusharipovizzat03', icons: <Globe /> },
        { name: 'Telegram', path: 'https://leetcode.com/u/abdusharipovizzat03/', icons: <Globe /> },
        { name: 'Medium', path: "#", icons: <Globe /> },
        { name: 'Study', path: 'https://urdu.uz/uz', icons: <University /> },

    ]
    return (
        <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
           <div className="py-4 px-5">
             <button onClick={toggleTheme} className="hidden md:block">
                {theme === 'light' ? <Moon className="cursor-pointer"/> : <Sun className="cursor-pointer"/>}
             </button>
           </div>
            <div className={`flex flex-col items-center p-4 space-y-2 border-b border-dashed ${theme === 'light' ? 'border-gray-700' : "border-gray-300"}`}>
                <img src="./image.png" alt="profile" className="w-20 h-20  object-cover rounded-full border-4 shadow cursor-pointer" />
                <div className="space-y-2 text-center">
                    <h2>Software Engineer</h2>
                    <h2>Izzatbek Abdusharipov</h2>
                </div>
            </div>
            <ul className="space-y-5 md:space-y-6 p-2 md:p-4">
                {
                    networks.map((network, index) => (
                        <li key={index} className={`text-xl md:p-2 px-4 rounded-md transition-all
                         text-gray-400 duration-300 hover:text-blue-500 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 `}>
                            <a href={network.path} className="flex items-center gap-3" >
                                {network.icons}
                                {network.name}
                            </a>

                        </li>
                    ))
                }
            </ul>
            <div className="px-4 py-1 text-xs">
                <p>© 2025 Izzatbek Abdusharipov</p>
                <p>Built with React & Tailwind CSS</p>
            </div>
        </div>
    )
}

export default SidebarComponent