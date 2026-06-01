import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  })  ;
  const [errors, setErrors] = useState({});
  const [status,setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if(errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach((field) => !formData[field] && (newErrors[field] = "This field is required"));
    if(formData.service !== "other" && formData.budget.trim())
      newErrors.budget = "Fill this field";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    setStatus("Sending...");

      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID,{
          ...formData,
          form_name: formData.name,
          reply_to: formData.email,
        }, PUBLIC_KEY);
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



  return(
    <section id="contact" className="w-full relative min-h-screen  bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <ParticlesBackground />
      </section>

  )}