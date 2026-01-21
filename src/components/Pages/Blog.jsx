import React from "react"

const posts = [
  {
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React, component structure, and how to build your first application.",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "Understanding REST APIs",
    excerpt:
      "A beginner-friendly guide to REST APIs, HTTP methods, and how frontend communicates with backend.",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Why Tailwind CSS is a Game Changer",
    excerpt:
      "Explore how Tailwind CSS speeds up development and helps maintain consistent UI design.",
    date: "Dec 12, 2025",
    readTime: "4 min read",
    link: "#",
  },
  {
    title: "React Router Explained",
    excerpt:
      "Learn how routing works in React applications using react-router-dom with real examples.",
    date: "Nov 30, 2025",
    readTime: "7 min read",
    link: "#",
  },
]

const Blog = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          I write about web development, JavaScript, React, and things I learn
          while building real-world applications.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <a
              href={post.link}
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
