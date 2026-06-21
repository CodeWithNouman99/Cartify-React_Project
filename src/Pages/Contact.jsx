import React, { useState } from "react";
import { motion } from "framer-motion";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { label: "Email", value: "hello@Cartify.com", icon: "✉" },
    { label: "Phone", value: "+92 300 1234567", icon: "✆" },
    { label: "Address", value: "Faisalabad, Pakistan", icon: "📍" },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#64748B] max-w-xl mx-auto"
          >
            Have a question or idea? We’d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        
        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0F172A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6366F1] transition"
            >
              {submitted ? "Message sent ✓" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
        >
          <h2 className="text-2xl font-semibold mb-8">
            Contact Info
          </h2>

          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-white border border-[#E2E8F0] rounded-xl hover:shadow-md transition"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-[#64748B]">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="rounded-xl overflow-hidden border border-[#E2E8F0]"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Faisalabad&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, filter: "grayscale(100%)" }}
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] text-white py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s connect
          </h2>
          <p className="mb-6 text-[#CBD5F5]">
            We usually reply within 24 hours.
          </p>

          <a
            href="mailto:hello@Cartify.com"
            className="bg-white text-[#0F172A] px-6 py-3 rounded-lg font-medium hover:bg-[#6366F1] hover:text-white transition"
          >
            Email Us
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;