import { motion } from 'framer-motion'
import { UseTheme } from '../provider/ThemeProvider'
import { cardVariants, containersVariants } from '../constants/motion'

const skillsData = [
  { category: 'Backend Development', tags: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'JWT', 'OAuth2'] },
  { category: 'Frontend Development', tags: ['Reactjs', 'Nextjs', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Databases & Message Brokers', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'] },
  { category: 'DevOps & Tools', tags: ['Docker', 'Git', 'Linux'] },
]

const experienceData = [
  {
    title: 'React Frontend Engineer',
    company: 'Scale TMS Group',
    date: 'Oct 2025 — Mar 2026',
    desc: 'Built responsive user interfaces using React, TypeScript, and Tailwind CSS. Transformed Figma designs into reusable frontend components.',
    achievements: [
      'Integrated REST APIs and implemented business modules for accounting, payroll, and invoicing',
    ]
  },
  {
    title: 'Java Backend Engineer Intern',
    company: '"Single integrator - UZINFOCOM" LLC',
    date: 'Jun 2025 — Jul 2025',
    desc: 'Developed scalable backend services using Java and Spring Boot, following best practices for code quality, performance, and maintainability.',
    achievements: [
      'Built and optimized RESTful APIs integrated with PostgreSQL, implementing CRUD operations and data validation',
      'Implemented secure JWT authentication and authorization, including user registration, login, token validation, and role-based access control to protect application endpoints',
    ]
  }
]

const projectsData = [
  {
    title: 'Agricultural B2B Supply Chain Platform',
    desc: 'Platform MVP connecting farmers with commercial buyers. Features Spring Boot entity models, order services, commission logic, and a modern React frontend.',
    tech: ['Spring Boot', 'Java', 'React', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'Auth System',
    desc: 'Secure authentication flow with access/refresh tokens. Implemented login, register, refresh token, logout, forgot-password, and reset-password functionalities.',
    tech: ['Spring Boot', 'JWT', 'OAuth2', 'Docker'],
  },
  {
    title: 'AI Chat Client',
    desc: 'Full-stack application integrating the Groq API with a robust Java Spring Boot backend and an interactive React TypeScript frontend.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Groq API'],
  }
]

const Section = ({ children, isDark }) => (
  <motion.div
    variants={containersVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className={`rounded-xl p-8 mb-8 border transition-colors duration-500 shadow-xl backdrop-blur-sm ${
      isDark 
        ? 'border-zinc-800/50 bg-[#0a0a0a]/50 hover:border-zinc-700' 
        : 'border-zinc-200/80 bg-white hover:border-zinc-300'
    }`}>
    {children}
  </motion.div>
)

const SectionTitle = ({ children, isDark }) => (
  <h2 className={`text-xl font-medium tracking-wide mb-6 flex items-center gap-3 ${
    isDark ? 'text-zinc-100' : 'text-zinc-900'
  }`}>
    <span className={`w-8 h-px inline-block ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`}></span>
    {children}
  </h2>
)

const Dashboard = () => {
  const { theme } = UseTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen p-6 md:p-12 transition-colors duration-500 font-sans ${
      isDark 
        ? 'bg-[#050505] text-zinc-300 selection:bg-zinc-800 selection:text-white' 
        : 'bg-zinc-50 text-zinc-700 selection:bg-zinc-200 selection:text-zinc-900'
    }`}>
      
      {/* Professional Summary */}
      <Section isDark={isDark}>
        <SectionTitle isDark={isDark}>Professional Summary</SectionTitle>
        <p className={`text-sm md:text-base leading-relaxed font-light max-w-4xl ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          Java Backend Developer focused on building secure and scalable applications with Spring Boot, REST APIs, JWT, and PostgreSQL. Passionate about solving real-world problems, learning modern backend technologies, and continuously improving through practical projects.
        </p>
      </Section>

      {/* Technical Skills */}
      <Section isDark={isDark}>
        <SectionTitle isDark={isDark}>Technical Expertise</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, i) => (
            <motion.div key={i} variants={cardVariants}
              className={`p-5 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40' 
                  : 'border-zinc-200 bg-zinc-100/50 hover:bg-zinc-100'
              }`}>
              <h3 className={`text-sm font-medium mb-4 tracking-wide ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((t, j) => (
                  <span key={j} className={`text-[11px] px-3 py-1 rounded-md font-medium border ${
                    isDark 
                      ? 'border-zinc-800 text-zinc-400 bg-[#0a0a0a]' 
                      : 'border-zinc-300 text-zinc-600 bg-white'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section isDark={isDark}>
        <SectionTitle isDark={isDark}>Professional Experience</SectionTitle>
        <div className="space-y-6">
          {experienceData.map((exp, i) => (
            <motion.div key={i} variants={cardVariants}
              className={`group relative pl-6 md:pl-8 border-l transition-colors duration-300 ${
                isDark ? 'border-zinc-800 hover:border-zinc-500' : 'border-zinc-300 hover:border-zinc-600'
              }`}>
              <div className={`absolute w-2 h-2 rounded-full -left-[4.5px] top-1.5 transition-colors duration-300 ${
                isDark 
                  ? 'bg-zinc-600 group-hover:bg-zinc-300' 
                  : 'bg-zinc-400 group-hover:bg-zinc-800'
              }`} />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                <h3 className={`text-base font-medium ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{exp.title}</h3>
                <span className={`text-[11px] uppercase tracking-wider font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {exp.date}
                </span>
              </div>
              <p className={`text-sm font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company}</p>
              <p className={`text-sm leading-relaxed mb-4 font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.desc}</p>
              <ul className={`text-sm space-y-2 font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {exp.achievements.map((a, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`}></span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section isDark={isDark}>
        <SectionTitle isDark={isDark}>Selected Works</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((proj, i) => (
            <motion.div key={i} variants={cardVariants}
              className={`p-6 rounded-lg border transition-all duration-300 group ${
                isDark 
                  ? 'border-zinc-800/60 bg-zinc-900/20 hover:border-zinc-600' 
                  : 'border-zinc-200 bg-zinc-100/40 hover:border-zinc-400'
              }`}>
              <h3 className={`text-lg font-medium mb-3 transition-colors ${
                isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'
              }`}>{proj.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 font-light min-h-15 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span key={j} className={`text-[10px] px-2.5 py-1 rounded-md font-medium border ${
                    isDark 
                      ? 'border-zinc-800/80 text-zinc-500 bg-[#050505]' 
                      : 'border-zinc-300 text-zinc-600 bg-white'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section isDark={isDark}>
        <SectionTitle isDark={isDark}>Education</SectionTitle>
        <motion.div variants={cardVariants} className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 rounded-lg border ${
          isDark ? 'border-zinc-800/60 bg-zinc-900/20' : 'border-zinc-200 bg-zinc-100/40'
        }`}>
          <div>
            <h3 className={`text-base font-medium mb-1 ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
              Telecommunications Engineering
            </h3>
            <p className={`text-sm font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Tashkent University of Information Technologies (TUIT)
            </p>
            <p className={`text-xs mt-2 font-light ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Focus area: Database, Networking, Web developing, and Algorithms
            </p>
          </div>
          <span className={`text-[11px] px-3 py-1 rounded-md font-medium border ${
            isDark 
              ? 'border-zinc-800 text-zinc-400 bg-[#0a0a0a]' 
              : 'border-zinc-300 text-zinc-600 bg-white'
          }`}>
            2022 — 2026
          </span>
        </motion.div>
      </Section>
    </div>
  )
}

export default Dashboard