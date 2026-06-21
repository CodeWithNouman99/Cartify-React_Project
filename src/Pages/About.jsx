import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const About = () => {
  const features = [
    {
      title: "Premium Quality",
      desc: "Every product is curated and tested to meet our highest standards.",
      icon: "✦",
    },
    {
      title: "Fast Delivery",
      desc: "Reliable shipping that gets your order to your door quickly.",
      icon: "→",
    },
    {
      title: "Secure Payments",
      desc: "Bank-level encryption keeps every transaction completely safe.",
      icon: "◆",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always ready to help, any day, any time.",
      icon: "♥",
    },
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "5K+", label: "Products Sold" },
    { value: "50+", label: "Brand Partners" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  const team = [
    { name: "Aarav Sharma", role: "Founder & CEO", img: "https://i.pravatar.cc/400?img=12" },
    { name: "Priya Patel", role: "Head of Design", img: "https://i.pravatar.cc/400?img=47" },
    { name: "Rohan Mehta", role: "Lead Developer", img: "https://i.pravatar.cc/400?img=33" },
    { name: "Sneha Kapoor", role: "Marketing Lead", img: "https://i.pravatar.cc/400?img=45" },
  ];

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen font-sans">
      {/* HERO */}
      <section className="border-b border-[#111111]/10">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="uppercase tracking-[0.4em] text-xs text-[#111111]/60 mb-6"
          >
            About Us
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Crafted with <span className="italic font-light">purpose.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#111111]/70"
          >
            We're a modern ecommerce brand built on quality, simplicity, and an
            unwavering commitment to the people we serve.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeft}
          className="overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="Our story"
            className="w-full h-112.5 object-cover grayscale"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideRight}
        >
          <p className="uppercase tracking-widest text-xs text-[#111111]/60 mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From a small idea to a growing community.
          </h2>
          <p className="text-[#111111]/70 leading-relaxed mb-4">
            What started as a simple passion project in 2020 has grown into a
            trusted destination for thousands of customers worldwide. We
            believed shopping online should feel personal, intentional, and
            beautifully simple.
          </p>
          <p className="text-[#111111]/70 leading-relaxed">
            Today, we continue to honor that vision — carefully curating every
            product and every experience.
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#111111] text-[#FAFAFA] py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeUp} className="border-l-2 border-[#FAFAFA]/30 pl-8">
            <p className="uppercase tracking-widest text-xs text-[#FAFAFA]/50 mb-4">
              Our Mission
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Make quality accessible to everyone.
            </h3>
            <p className="text-[#FAFAFA]/70 leading-relaxed">
              We exist to bridge the gap between exceptional products and the
              people who appreciate them — without the unnecessary markup or
              complexity.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="border-l-2 border-[#FAFAFA]/30 pl-8">
            <p className="uppercase tracking-widest text-xs text-[#FAFAFA]/50 mb-4">
              Our Vision
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Redefine what online shopping feels like.
            </h3>
            <p className="text-[#FAFAFA]/70 leading-relaxed">
              A world where every click feels considered, every package feels
              like a gift, and every customer feels genuinely valued.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-xs text-[#111111]/60 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built on what matters.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="border border-[#111111]/15 p-8 bg-white hover:border-[#111111] transition-colors duration-300"
            >
              <div className="text-3xl mb-5 text-[#111111]">{f.icon}</div>
              <h3 className="text-lg font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-[#111111]/65 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-[#111111] text-[#FAFAFA] py-20 border-y border-[#111111]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {s.value}
              </div>
              <div className="uppercase tracking-[0.25em] text-xs text-[#FAFAFA]/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-xs text-[#111111]/60 mb-4">
            Our People
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet the team.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center group"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-lg">{t.name}</h3>
              <p className="text-xs text-[#111111]/60 uppercase tracking-widest mt-1">
                {t.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] text-[#FAFAFA] py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to experience it?
          </h2>
          <p className="text-[#FAFAFA]/70 mb-10 text-lg">
            Discover handpicked products designed to elevate your everyday.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/products"
            className="inline-block border border-[#FAFAFA] px-10 py-4 font-semibold uppercase tracking-[0.25em] text-sm hover:bg-[#FAFAFA] hover:text-[#111111] transition-colors duration-300"
          >
            Shop Now
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;