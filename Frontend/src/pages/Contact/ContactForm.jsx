import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Later
    // axios.post("/api/contact", formData)
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
              Send Us a Message
            </span>

            <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
              Let's Start
              <span className="block text-red-600">
                The Conversation
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Have questions about our inventory, financing options,
              trailer sales, or repair services? Fill out the form and
              one of our specialists will get back to you as soon as
              possible.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
                <p className="text-slate-300">
                  Quick Response from Our Team
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
                <p className="text-slate-300">
                  Financing Assistance Available
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
                <p className="text-slate-300">
                  Truck & Trailer Experts
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-600"
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-600"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Interested In
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-600"
                  required
                >
                  <option value="">Select a Service</option>
                  <option>Truck Sales</option>
                  <option>Trailer Sales</option>
                  <option>Financing</option>
                  <option>Repair Services</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;