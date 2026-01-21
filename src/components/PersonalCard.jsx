import { Copy, PhoneCall } from 'lucide-react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

const PersonalCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-xl object-cover bg-white p-6 shadow-lg">

        <div className="flex justify-center">
          <img
            src="/IMG_4034.jpg"
            alt="hero-img"
            className="w-100 rounded-xl"
          />
        </div>

        <div className="mt-4">
          <h2 className="font-[Poppins] text-xl font-semibold">
            Rati Sahoo 👋
          </h2>

          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            <b>Full Stack Developer</b> with <b>1 year</b> of hands-on
            <b> experience</b> building responsive web applications using
            JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 cursor-pointer">
            <PhoneCall className="w-4" />
            Book a call
          </button>

          <button className="flex items-center gap-2 rounded-md border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white cursor-pointer">
            <Copy className="w-4" />
            Copy email
          </button>
        </div>

        <ul className="mt-5 flex gap-4">
          <a href="https://www.facebook.com/anivibesofficial/" target="_blank" className="text-2xl text-blue-500 hover:scale-110 transition"><FaFacebook /></a>
          <a href="#" className="text-2xl text-black hover:scale-110 transition"><FaGithub /></a>
          <a href="#" className="text-2xl text-blue-800 hover:scale-110 transition"><FaLinkedin /></a>
          <a href="#" className="text-2xl text-green-600 hover:scale-110 transition"><IoLogoWhatsapp /></a>
        </ul>
      </div>
    </div>
  )
}

export default PersonalCard
