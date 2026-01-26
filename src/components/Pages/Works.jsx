import React from "react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills, and contact information. The website is fully responsive and optimized for performance and SEO. Implemented modern UI design principles, smooth navigation, and reusable components to ensure a professional online presence. The portfolio highlights web development projects and demonstrates frontend design and development skills.",
    tech: ["React", "Tailwind", "Vite", "JavaScript"],
    link: "https://ratikantportfolio.vercel.app/",
  },
  {
    title: "Highway Delite",
    description:
      "Developed a travel booking web application that allows users to browse destinations, view travel packages, and make bookings online. Implemented features such as search and filtering, booking forms, and dynamic price display. Built REST APIs to handle booking data and user information, and ensured a responsive, user-friendly interface across devices. Focused on performance, usability, and smooth frontend–backend integration.",
    tech: ["React", "Node.js", "MongoDB", "API's", "Database Integration"],
    link: "https://highway-delite-frontend-xc2t.onrender.com/",
  },
  {
    title: "Restaurant App",
    description:
      "Built a full-featured restaurant app where users can create, edit, and delete review posts. The platform supports dynamic content rendering, structured food sections, and responsive layouts for different screen sizes. Implemented backend APIs to manage restaurant data and frontend components for displaying restaurants efficiently. Focused on clean UI, scalability, and content management.",
    tech: ["React", "Express", "MongoDB", "REST APIs", "Database integration", "Node.js", "Express"],
    link: "https://restaurant-app-one-gamma.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "Developed a task management web application that helps users create, update, and organize tasks efficiently. The app supports features like task categorization, due dates, and status tracking to improve productivity. Implemented user-friendly UI components and handled form validation and state management on the frontend. The backend manages task data with CRUD operations and ensures smooth data flow between client and server.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML5"],
    link: "https://cherry-frontend-xtvi.onrender.com/",
  },
  {
    title: "Real Time Chat Application",
    description:
      "Developed a real-time chatting application that allows users to send and receive messages instantly. Implemented features such as user authentication, one-to-one chat, and real-time message updates. Used WebSockets to enable live communication and ensured smooth message delivery without page refresh. Focused on responsive UI, efficient state handling, and scalable backend architecture.",
    tech: ["React", "JavaScript", "Web Sockets", "Tailwind", "Vite", "Node", "Express"],
    link: "https://real-time-chat-app-sockets.vercel.app/login",
  },
  {
    title: "Offerings Page",
    description:
      "Designed and developed an offerings (services) page to clearly present products or services with structured sections and engaging UI. Implemented responsive layouts, reusable components, and smooth navigation to enhance user experience. Focused on clear content hierarchy, visual consistency, and performance optimization to effectively communicate service details to users.",
    tech: ["React", "JavaScript", "Tailwind", "Vite", "Node", "Express"],
    link: "https://offerings-s9px.onrender.com/",
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
