import React from "react"

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using modern technologies like React, Node.js, and MongoDB.",
  },
  {
    title: "UI / UX Design",
    description:
      "Designing clean and intuitive user interfaces with a focus on usability, accessibility, and modern design trends.",
  },
  {
    title: "Backend Development",
    description:
      "Developing secure and scalable server-side applications, REST APIs, and database architectures.",
  },
  {
    title: "API Integration",
    description:
      "Integrating third-party APIs, payment gateways, authentication systems, and external services.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, SEO, and performance to deliver the best user experience.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Providing ongoing support, bug fixes, feature updates, and long-term application maintenance.",
  },
]

const Services = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          I offer a wide range of services to help businesses and individuals
          build powerful digital products.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
