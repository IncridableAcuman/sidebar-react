import { Home, Settings, UserRound } from "lucide-react"
import { Link } from "react-router-dom"


const SidebarComponent = () => {
    return (
        <div className={`w-64 h-screen bg-gray-900 text-white shadow border-r`}>
            <div className="flex items-center justify-between gap-3 p-4 text-sm border-b border-dashed border-gray-700">
                <img src="./image.png" alt="profile" className="w-14 h-14 object-cover rounded-full" />
                <div className="space-y-2">
                    <h2>Software Engineer</h2>
                    <h2>Izzatbek Abdusharipov</h2>
                </div>
            </div>
            <ul className="space-y-6 p-4">
                <li>
                    <Link to={"/dashboard"} className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900 transition duration-300 p-2 rounded-md">
                        <Home />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to={'/profile'} className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900 transition duration-300 p-2 rounded-md">
                        <UserRound />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to={'/settings'} className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900 transition duration-300 p-2 rounded-md">
                        <Settings />
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarComponent