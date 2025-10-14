"use client";

import { useState } from "react";
import { Send, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254725381288?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8">
        We are here to assist you with all your medical supply needs.
      </p>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "phone", "message"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium capitalize">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1 h-28"
                ></textarea>
              ) : (
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 transition"
          >
            <Send size={20} /> <span>Send</span>
          </button>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full max-w-2xl mt-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <MapPin className="mr-2" /> Find Us
        </h3>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.417927264247!2d36.8219469!3d-1.2920655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c1b0a28207%3A0x36f62b0e2d7a507!2sKisumu!5e0!3m2!1sen!2ske!4v1711742000000!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
