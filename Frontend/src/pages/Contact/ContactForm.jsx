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

    const subject = `Truck Inquiry from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Interested In:
${formData.service}


Message:

${formData.message}
    `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=trucksales@torontocoast.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}

          <div>
            <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-xs font-semibold text-red-500 sm:text-sm">
              Send Us a Message
            </span>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Let's Start
              <span className="block text-red-600">The Conversation</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              Have questions about our inventory, financing options, trailer
              sales, or repair services? Fill out the form and our team will get
              back to you.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-600" />

                <p className="text-sm text-slate-300 sm:text-base">
                  Quick Response from Our Team
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-600" />

                <p className="text-sm text-slate-300 sm:text-base">
                  Financing Assistance Available
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-600" />

                <p className="text-sm text-slate-300 sm:text-base">
                  Truck & Trailer Experts
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="rounded-3xl border border-white/10 bg-white p-5 shadow-2xl sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Interested In
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
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
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700"
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
