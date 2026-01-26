import React from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const RecentProjectsCard = () => {
  return (
    <div className="w-full rounded-xl bg-white px-8 py-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[Poppins] text-xl font-semibold text-blue-500">
          Recent Projects
        </h3>

        <Link to="/works">
          <FaArrowRightLong className="cursor-pointer text-xl transition hover:translate-x-1" />
        </Link>
      </div>

      <div className="space-y-4">
        <Link to="https://www.airbrush.ai/" target="_blank">
          <div className="rounded-xl px-2 py-2 shadow-lg transition hover:scale-[1.02]">
            <img className="rounded-xl" src="/airbrush.png" alt="airbrush" />
          </div>
        </Link>

        <Link to="https://cherry-frontend-xtvi.onrender.com/" target="_blank">
          <div className="rounded-xlpx-2 py-2 shadow-lg transition hover:scale-[1.02]">
            <img className="rounded-xl" src="/cherry.png" alt="cherry" />
          </div>
        </Link>

        <Link to="https://project-three-url.com" target="_blank">
          <div className="rounded-xl px-2 py-2 shadow-lg transition hover:scale-[1.02]">
            <img className="rounded-xl" src="/restaurantApp.png" alt="restaurantApp" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default RecentProjectsCard
