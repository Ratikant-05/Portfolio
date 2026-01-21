import Lottie from "lottie-react"
import React, { useState } from "react"

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "web-development",
      message: "",
    })
    console.log(form)
  }

  return (
    <div className="flex w-full justify-center px-4">

      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">

        <div className="relative bg-[#3f2b96] p-8 text-white">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2 text-sm text-gray-200">
            Fill up the form and our team will get back to you within 24 hours.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p>📞 +91 9310088262</p>
            <p>✉️ ratikants388@gmail.com</p>
            <p>📍 Rohini, New Delhi</p>
          </div>

          <div className="absolute bottom-0 right-24 flex text-lg">
              <Lottie path="/Support.json" autoplay loop className="w-120" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs text-gray-500">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="off"
                className="w-full border-b py-2 text-sm outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="off"
                className="w-full border-b py-2 text-sm outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                className="w-full border-b py-2 text-sm outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="off"
                className="w-full border-b py-2 text-sm outline-none focus:border-purple-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-medium">
              What type of service do you need?
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { id: "web-design", label: "Web Design" },
                { id: "web-development", label: "Web Development" },
                { id: "logo-design", label: "Logo Design" },
                { id: "other", label: "Other" },
              ].map((item) => (
                <label key={item.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="service"
                    value={item.id}
                    checked={form.service === item.id}
                    onChange={handleChange}
                    className="accent-purple-600"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs text-gray-500">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              autoComplete="off"
              placeholder="Write your message..."
              className="mt-1 w-full resize-none border-b py-2 text-sm outline-none focus:border-purple-600"
            />
          </div>

          <button
            type="submit"
            className="mt-8 rounded-lg bg-[#3f2b96] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f2175]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage