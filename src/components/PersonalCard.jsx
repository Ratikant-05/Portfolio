import { Copy, PhoneCall } from 'lucide-react'
import { useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const PersonalCard = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false)
  const [copiedwp, setCopiedwp] = useState(false)

  const copyWhatsapp = async() => {
    await navigator.clipboard.writeText("+91 9310088262")
    setCopiedwp(true)
    setTimeout(()=> setCopiedwp(false), 2000)
  }
  const copyEmail = async () => {
    await navigator.clipboard.writeText("ratikants388@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <button onClick={() => navigate("/contact")} className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 cursor-pointer">
            <PhoneCall className="w-4" />
            Book a call
          </button>

          <button onClick={() => copyEmail()} className="flex items-center gap-2 rounded-md border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white cursor-pointer">
            <Copy className="w-4" />
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <ul className="mt-5 flex gap-4">
          <a href="https://www.facebook.com/anivibesofficial/" target="_blank" className="text-2xl text-blue-500 hover:scale-110 transition"><FaFacebook /></a>
          <a href="https://github.com/Ratikant-05" target='_blank' className="text-2xl text-black hover:scale-110 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rati-sahoo-9b4b5a220/" target='_blank' className="text-2xl text-blue-800 hover:scale-110 transition"><FaLinkedin /></a>
          <a onClick={()=> copyWhatsapp()} className="text-2xl text-green-600 hover:scale-110 transition cursor-pointer"><IoLogoWhatsapp /><span className='text-xs'>{copiedwp ? "Copied!" : ""}</span></a>
        </ul>
      </div>
    </div>
  )
}

export default PersonalCard
