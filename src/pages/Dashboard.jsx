import React from 'react'
import { UseTheme } from '../provider/ThemeProvider'

const Dashboard = () => {
  const { theme } = UseTheme();
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-10`}>
      {/* Professional Summary */}
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
      {/* professional expirence */}
      <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6 my-6 rounded-md w-full h-full shadow-2xl`}>
        <h1
          className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold`}
        >Professional Expirence</h1>
        <div className={`${theme === 'light' ? 'bg-gray-900 text-white border border-gray-800 rounded-lg shadow-md' : 'bg-white text-gray-900'} p-6 mt-6 space-y-4`}>
          <div className="flex items-center justify-between gap-3">
            <h2 className='text-blue-500 text-3xl font-semibold'>Freelance Frontend Developer</h2>
            <p className='bg-blue-500 rounded-full py-1 px-3'>Octomber 2025 - Present</p>
          </div>
          <p>Built and deployed RESTful APIs for various scalable web platforms using Java Spring Boot REST Framework integrating third-party services for enhanced functionality.</p>
          <h2 className='text-2xl font-semibold text-blue-500'>Key Achievements</h2>
          <ol className='space-y-1.5'>
            <li>• Developed a Django full-stack project with Google Maps API integration</li>
            <li>• Integrated CKEditor 5 into Django projects</li>
            <li>• Utilized GitHub for version control and CI/CD pipelines</li>
            <li>• Improved backend performance by optimizing database queries</li>
            <li>• Designed modular project architectures</li>
          </ol>
        </div>
        {/* backend */}
        <div className={`${theme === 'light' ? 'bg-gray-900 text-white border border-gray-800 rounded-lg shadow-md' : 'bg-white text-gray-900'} p-6 mt-6 space-y-4`}>
          <div className="flex items-center justify-between gap-3">
            <h2 className='text-blue-500 text-3xl font-semibold'>Backend Developer</h2>
            <p className='bg-blue-500 rounded-full py-1 px-3'>Octomber 2025 - Present</p>
          </div>
          <p>Built and deployed RESTful APIs for various scalable web platforms using Java Spring Boot REST Framework integrating third-party services for enhanced functionality.</p>
          <h2 className='text-2xl font-semibold text-blue-500'>Key Achievements</h2>
          <ol className='space-y-1.5'>
            <li>• Developed a Django full-stack project with Google Maps API integration</li>
            <li>• Integrated CKEditor 5 into Django projects</li>
            <li>• Utilized GitHub for version control and CI/CD pipelines</li>
            <li>• Improved backend performance by optimizing database queries</li>
            <li>• Designed modular project architectures</li>
          </ol>
        </div>
      </div>
      {/* projects */}
      <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6 my-6 rounded-md w-full h-full shadow-2xl`}>
        <h1
          className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold`}
        >Key Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-6">

          <div className={`${theme === 'light' ? 'bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 transition duration-300' : 'bg-gray-100 text-gray-900'} p-6 shadow-2xl rounded-2xl hover:shadow-cyan-500 transition duration-300`}>
            <h2 className='text-2xl py-4 font-semibold text-blue-500'>Django Full-Stack Platform with Google Integrations</h2>
            <div className="space-y-4">

              <h3 className='text-lg font-semibold'>Overview</h3>
              <p>A full-stack Django application featuring location-based services, secure authentication, and rich text editing for content management.</p>

              <div className="space-y-4">
                <h3 className='text-lg font-semibold'>Technologies</h3>
                <p>Django
                  Django REST Framework
                  Google Maps API
                  Google Cloud PostgreSQL
                  Google Email Verification
                  CKEditor 5
                  GitHub</p>
              </div>

            </div>

            <div className="space-y-4">
              <h3 className='text-lg font-semibold pt-4'>Achievements</h3>
              <ol className='space-y-2'>
                <li>• Integrated Google Maps API for location-based features</li>
                <li>• Utilized Google Cloud PostgreSQL for high-availability database management</li>
                <li>• Implemented Google Email Verification with token-based authentication</li>
                <li>• Incorporated CKEditor 5 for rich text editing</li>
              </ol>
            </div>

          </div>

          <div className={`${theme === 'light' ? 'bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 transition duration-300' : 'bg-gray-100 text-gray-900'} p-6 shadow-2xl rounded-2xl hover:shadow-cyan-500 transition duration-300`}>
            <h2 className='text-2xl py-4 font-semibold text-blue-500'>Django Full-Stack Platform with Google Integrations</h2>
            <div className="space-y-4">

              <h3 className='text-lg font-semibold'>Overview</h3>
              <p>A full-stack Django application featuring location-based services, secure authentication, and rich text editing for content management.</p>

              <div className="space-y-4">
                <h3 className='text-lg font-semibold'>Technologies</h3>
                <p>Django
                  Django REST Framework
                  Google Maps API
                  Google Cloud PostgreSQL
                  Google Email Verification
                  CKEditor 5
                  GitHub</p>
              </div>

            </div>

            <div className="space-y-4">
              <h3 className='text-lg font-semibold pt-4'>Achievements</h3>
              <ol className='space-y-2'>
                <li>• Integrated Google Maps API for location-based features</li>
                <li>• Utilized Google Cloud PostgreSQL for high-availability database management</li>
                <li>• Implemented Google Email Verification with token-based authentication</li>
                <li>• Incorporated CKEditor 5 for rich text editing</li>
              </ol>
            </div>

          </div>

        </div>
      </div>
      {/* education */}
      <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6 my-6 rounded-md w-full h-full shadow-2xl`}>
        <h1
          className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold py-4`}
        >Education</h1>

        <div className={`${theme === 'light' ? 'bg-gray-900 text-white border border-gray-800' : 'bg-gray-100 text-gray-900'} p-6 rounded-md shadow-md space-y-4`}>

          <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">

            <div className="space-y-2">
              <h2 className='text-3xl font-semibold text-blue-500'>Bachelor's Degree in Software engineering</h2>
              <p>Tashkent University of Information Technologies (TUIT), Urgench Branch, Uzbekistan</p>
            </div>
            <p className='bg-blue-500 rounded-full py-1 px-3'>September 2022 - Present</p>

          </div>
          <p >Currently a 3rd-year student, focusing on software engineering, algorithms, and system design.  Actively participating in university programming contests and hackathons to enhance practical skills.</p>
        </div>

      </div>
      {/* Additional Achievments */}
      <div className={`${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6 my-6 rounded-md w-full h-full shadow-2xl`}>
        <h1
          className={`${theme === 'light' ? 'text-white' : 'text-gray-900'} text-2xl md:text-4xl font-semibold py-4`}
        >Additional Achievments</h1>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Dashboard