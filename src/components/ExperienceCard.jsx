import React from 'react'
import { FaGitAlt, FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'

const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-10">
      
      <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
        <h3 className="font-[Poppins] text-xl font-semibold text-blue-500 mb-6">
          Work Experience
        </h3>

        <div className="flex flex-wrap items-center gap-6">
          <div className="text-sm text-gray-600">
            <p className="font-semibold">2025</p>
            <p>Mar - Oct</p>
          </div>

          <div className="flex flex-col items-center ml-16">
            <img
              src="writecream.png"
              alt="logo"
              className="w-18 object-contain"
            />
            <span className="font-medium">Digital Guruji</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold text-red-900 mb-2">
            Skills Displayed <span className="text-red-900">*</span>
          </p>

          <div className="grid grid-cols-3 gap-2 text-sm text-gray-700">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>WebSockets</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
        <h3 className="font-[Poppins] text-xl font-semibold text-blue-500 mb-6">
          My Expert Area
        </h3>

        <div className="grid grid-cols-3 gap-6 text-center text-sm">
          <Skill icon={<FaHtml5 />} label="HTML5" color="text-orange-600" />
          <Skill icon={<IoLogoCss3 />} label="CSS3" color="text-purple-500" />
          <Skill icon={<IoLogoJavascript />} label="JavaScript" color="text-yellow-400" />
          <Skill icon={<IoLogoReact />} label="React" color="text-cyan-500" />
          <Skill icon={<SiMongodb />} label="MongoDB" color="text-green-600" />
          <Skill icon={<SiExpress />} label="Express.js" />
          <Skill icon={<SiTypescript />} label="TypeScript" color="text-blue-700" />
          <Skill icon={<FaGitAlt />} label="Git" color="text-red-500" />
          <Skill icon={<RiNextjsFill />} label="Next.js" />
        </div>
      </div>
    </div>
  )
}

const Skill = ({ icon, label, color = '' }) => (
  <div className="flex flex-col items-center gap-1">
    <span className={`text-3xl ${color}`}>{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
)

export default ExperienceCard
