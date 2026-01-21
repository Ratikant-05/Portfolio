import React from "react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and contact information.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with authentication, product management, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with user authentication, rich text editor, and REST APIs.",
    tech: ["React", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity-focused task manager with real-time updates and clean UI.",
    tech: ["React", "Node.js", "WebSockets"],
    link: "#",
  },
]

const Works = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          My Works
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          A selection of projects I’ve worked on, showcasing my skills in
          frontend and backend development.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works
