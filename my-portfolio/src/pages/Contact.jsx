import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Astra from "../assets/Astra.png";
import { motion } from "framer-motion";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach(
      (field) =>
        !formData[field] && (newErrors[field] = "This field is required"),
    );
    if (formData.service !== "other" && formData.budget.trim())
      newErrors.budget = "Fill this field";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY,
      );
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full relative min-h-screen  bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* left side */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* right side */}

        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together!</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gay-500"} text-white focus:outline-none focus:ring-2 focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">
                Your Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${errors.email ? "border-red-500" : "border-gay-500"} text-white focus:outline-none focus:ring-2 focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">
                Service Interested In<span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:ring-2 focus:border-blue-500`}
              >
                <option value="" disabled>
                  Something in mind?
                </option>
                <option value="Full Stack Development" className="text-black">
                  Full Stack Development
                </option>
                <option value="Frontend Development" className="text-black">
                  Frontend Development
                </option>
                <option value="Backend Development" className="text-black">
                  Backend Development
                </option>
                <option value="Others" className="text-black">
                  Others
                </option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs">{errors.service}</p>
              )}
            </div>

            {formData.service && formData.service !== "Others" && (
              <div className="flex flex-col">
                <label htmlFor="" className="mb-1">
                  Estimated Budget<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  placeholder="Estimated Budget"
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.budget ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:ring-2 focus:border-blue-500`}
                />
                {errors.budget && (
                  <p className="text-red-500 text-xs">{errors.budget}</p>
                )}
              </div>
            )}

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">
                Explain Your Idea<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                name="idea"
                value={formData.idea}
                placeholder="Describe your idea..."
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border
                ${errors.idea ? "border-red-500" : "border-gray-500"}
                 text-white focus:outline-none focus:border-blue-500`}
              ></textarea>
              {errors.idea && (
                <p className="text-red-500 text-xs">{errors.idea}</p>
              )}
            </div>
            {status && (
              <p
                className={`text-sm ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-yellow-400"}`}
              >
                {status === "sending"
                  ? "sending..."
                  : status === "success"
                    ? "Message sent successfully!"
                    : "Something went wrong. Please rey again."}
              </p>
            )}
            <motion.button
              className="bg-blue-300 hover:bg-blue-600 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "sending..." : "send message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
