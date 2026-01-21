import React from "react"

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 space-y-20">

      {/* INTRO */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            About Me
          </h1>

          <p className="mt-4 leading-relaxed text-gray-600">
            I’m a passionate <span className="font-semibold text-gray-900">Full Stack Developer</span> with
            1 year of hands-on experience building modern, responsive, and
            scalable web applications. I enjoy turning complex problems into
            clean, intuitive, and efficient solutions.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            My core expertise lies in JavaScript, React, Node.js, and MongoDB.
            I focus on writing maintainable code, building reusable components,
            and delivering user-centric experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Git"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* QUICK FACTS */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Quick Facts
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li className="flex justify-between">
              <span>Experience</span>
              <span className="font-medium">1 Year</span>
            </li>
            <li className="flex justify-between">
              <span>Role</span>
              <span className="font-medium">Full Stack Developer</span>
            </li>
            <li className="flex justify-between">
              <span>Location</span>
              <span className="font-medium">India</span>
            </li>
            <li className="flex justify-between">
              <span>Availability</span>
              <span className="font-medium text-green-600">
                Open to Work
              </span>
            </li>
          </ul>

          <button className="mt-8 w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Download Resume
          </button>
        </div>
      </div>

      {/* WHAT I DO */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What I Do
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frontend Development",
              desc: "Building responsive, accessible, and performant UIs using React and Tailwind CSS.",
            },
            {
              title: "Backend Development",
              desc: "Creating scalable APIs, authentication systems, and database logic with Node.js and MongoDB.",
            },
            {
              title: "Full Stack Solutions",
              desc: "Delivering end-to-end solutions from UI to backend with clean architecture.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          My Journey
        </h2>

        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-semibold text-gray-800">
              2025 – Started Professional Development
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Began working on real-world projects using React, Node.js, and MongoDB,
              gaining hands-on experience in full stack development.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-semibold text-gray-800">
              Present – Building & Improving
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Continuously improving skills, building personal projects,
              and focusing on performance, clean code, and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* WORK VALUES */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          How I Work
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I believe in writing clean, readable code, communicating clearly,
          and continuously learning. I value consistency, attention to detail,
          and delivering solutions that actually solve problems.
        </p>
      </div>

    </section>
  )
}

export default About
