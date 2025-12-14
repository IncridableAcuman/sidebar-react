import React from 'react'
import { UseTheme } from '../provider/ThemeProvider'

const Dashboard = () => {
  const { theme } = UseTheme();
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-10`}>
      <div className={`p-6 space-y-4 shadow-2xl transition duration-300 ${theme === 'light' ? 'bg-gray-900 text-blue-500 hover:shadow-cyan-500 transition duration-300' : 'bg-white text-gray-800'} rounded-lg my-8`}>
        <h1 className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold`}>Professional Summary</h1>
        <p className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} font-semibold`}>I am a backend developer with a strong interest in software engineering. My main focus is developing backend applications using MERN stack and Java (Spring Boot) technologies. I have experience in database, authentication, API integrations and building real-time applications.

          I am also interested in learning about Docker, microservices and scalable architectures. Building efficient, secure and scalable systems based on software engineering principles is my main goal.</p>
      </div>
      {/* technical skills */}
      <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6 rounded-md w-full h-full shadow-2xl`}>
        <h1
          className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold`}
        >Technical Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 pt-10 gap-4 sm:gap-6">

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>Algorithms & Problem Solving</h6>
            <div className='space-y-4'>
              <p>Dynamic Programming</p>
              <p>Greedy Algorithms Graph Theory</p>
              <p>Sorting and Searching</p>
              <p>Substring Manipulation</p>
              <p> Array Optimization</p>
            </div>
          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>Databases</h6>
            <div className='space-y-4'>
              <p>PostgreSQL MySQL SQLite</p>
              <p>Google Cloud PostgreSQL</p>
              <p>MongoDB Redis</p>
            </div>
          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>DevOps & Infrastructure</h6>
            <div className='space-y-4'>
              <p>Nginx Gunicorn Uvicorn Docker</p>
              <p>Linux (Ubuntu)</p>
            </div>
          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>Frameworks & Libraries</h6>
            <div className='space-y-4'>
              <p>NodeJs ExpressJs NestJs</p>
              <p>Java Spring Boot Gradle Maven</p>
              <p>Bootstrap ReactJs NextJs</p>
            </div>
          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>Programming Languages</h6>
            <div className='space-y-4'>
              <p>C++ Java Python JavaScript</p>
            </div>
          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition duration-300 hover:shadow-cyan-500' : 'bg-gray-200 text-gray-800'} space-y-4 rounded-lg p-6 shadow-lg md:shadow-2xl`}>
            <h6 className='text-blue-500 text-2xl font-semibold'>Tools & Technologies</h6>
            <div className='space-y-4'>
              <p>Git Postman PgAdmin4</p>
              <p>VS Code IntelliJ Idea</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard