import React, { useState } from "react";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    agree: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-white via-purple-50 to-white shadow-xl rounded-3xl px-8 py-10 md:py-12 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">
        Get in Touch
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        We'll respond within 24 hours after you submit this form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder="e.g. Supriya"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="surname"
              required
              value={formData.surname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder="e.g. Chandanshive"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 accent-purple-600"
          />
          <p>
            I agree to the{" "}
            <span className="text-purple-600 font-semibold underline cursor-pointer hover:text-purple-800">
              Terms & Conditions
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
          >
            Send Message
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium transition"
          >
            Book a Meeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
