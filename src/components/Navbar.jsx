import {Box,BriefcaseBusiness,House,Layers,MessagesSquare,Moon,Pencil,Phone,SquareUser,Menu,X,} from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

const navItemClass =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-200"

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto w-[92%] py-4">
        <nav className="relative rounded-2xl bg-white px-6 py-4 shadow-lg">

          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-1">
              <Box />
              <span className="font-[Montserrat] text-xl font-bold">
                Rati
              </span>
              <span className="font-[Montserrat] text-xl font-bold text-blue-400">
                Folio
              </span>
            </NavLink>

            <ul className="hidden items-center gap-6 md:flex">
              <NavItem to="/" icon={<House />} label="Home" />
              <NavItem to="/about" icon={<SquareUser />} label="About" />
              <NavItem to="/services" icon={<Layers />} label="Services" />
              <NavItem to="/works" icon={<BriefcaseBusiness />} label="Works" />
              <NavItem to="/blog" icon={<Pencil />} label="Blog" />
              <NavItem to="/contact" icon={<MessagesSquare />} label="Contact" />
            </ul>

            <div className="hidden items-center gap-4 md:flex">
              {/* <button className="text-gray-500 hover:text-black">
                <Moon />
              </button> */}
              <button onClick={() => navigate('/contact')} className="flex items-center gap-2 rounded-lg border bg-black px-4 py-2 font-bold text-white cursor-pointer transition hover:bg-white hover:text-black">
                Let's Talk <Phone className="w-5" />
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl bg-white p-4 shadow-lg md:hidden">
              <div className="flex flex-col gap-2">
                <NavItem to="/" icon={<House />} label="Home" onClick={() => setOpen(false)} />
                <NavItem to="/about" icon={<SquareUser />} label="About" onClick={() => setOpen(false)} />
                <NavItem to="/services" icon={<Layers />} label="Services" onClick={() => setOpen(false)} />
                <NavItem to="/works" icon={<BriefcaseBusiness />} label="Works" onClick={() => setOpen(false)} />
                <NavItem to="/blog" icon={<Pencil />} label="Blog" onClick={() => setOpen(false)} />
                <NavItem to="/contact" icon={<MessagesSquare />} label="Contact" onClick={() => setOpen(false)} />

                <div className="mt-4 flex items-center gap-4">
                  {/* <button className="text-gray-500 hover:text-black">
                    <Moon />
                  </button> */}
                  <button className="flex items-center gap-2 rounded-lg border bg-black px-4 py-2 font-bold text-white transition hover:bg-white hover:text-black">
                    Let's Talk <Phone className="w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </nav>
      </div>
    </header>
  )
}

const NavItem = ({ to, icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `${navItemClass} ${isActive ? "bg-gray-200 text-black" : ""
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
)

export default Navbar
