import React from 'react'
import { UseTheme } from '../provider/ThemeProvider'

const Dashboard = () => {
  const { theme } = UseTheme();
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-10`}>
      <div className={`pdg space-y-4 shadow hover:shadow-md transition duration-300 ${theme === 'light' ? 'bg-gray-800 text-blue-500' : 'bg-white text-gray-800'} rounded-lg mb-8`}>
        <h1 className='text-2xl font-bold'>Professional Summary</h1>
        <p className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} font-semibold`}>I am a backend developer with a strong interest in software engineering. My main focus is developing backend applications using MERN stack and Java (Spring Boot) technologies. I have experience in database, authentication, API integrations and building real-time applications.

          I am also interested in learning about Docker, microservices and scalable architectures. Building efficient, secure and scalable systems based on software engineering principles is my main goal.</p>
      </div>
      {/* technical skills */}
      <div className={`${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} p-6 rounded-md`}>
        <h1>Technical Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 pt-10 gap-4 sm:gap-6">
          <div className="">
            <h6>Algorithms & Problem Solving</h6>
            <p>Dynamic Programming
              Greedy Algorithms
              Graph Theory
              Sorting and Searching
              Substring Manipulation
              Array Optimization</p>
          </div>
          <div className="">
            <h6>Databases</h6>
            <p>PostgreSQL
              MySQL
              SQLite
              Google Cloud PostgreSQL
              MongoDB
              Redis</p>
          </div>
          <div className="">
            <h6>DevOps & Infrastructure</h6>
            <p>Nginx
              Gunicorn
              Uvicorn
              Docker
              Linux (Ubuntu)</p>
          </div>
          <div className="">
            <h6>Frameworks & Libraries</h6>
            <p>Django
              Django REST Framework
              Django Channels
              FastAPI
              Aiogram (2)
              PyQt5</p>
          </div>
          <div className="">
            <h6>Programming Languages</h6>
            <p>Python
              SQL
              C++
              Java
              JavaScript</p>
          </div>
          <div className="">
            <h6>Tools & Technologies</h6>
            <p>Git
              Postman
              PgAdmin4
              XAMPP
              VS Code
              PyCharm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard