import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-950 text-white px-6 py-16 md:px-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
          Driving Digital Transformation Across Industries
        </p>
      </motion.div>

      {/* INTRODUCTION */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-300 leading-relaxed">
          At <span className="text-blue-400 font-semibold">WebNexa</span>, we
          build fast, user-friendly digital solutions—including custom websites,
          mobile apps, and digital transformation services—that help businesses
          grow online. We work with startups and enterprises to turn ideas into
          powerful tools that improve your online presence, increase user
          engagement, and drive measurable business growth. We deliver
          technology that aligns with your goals and fuels success.
        </p>
      </div>

      {/* CORE VALUES */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Innovation", text: "Constantly exploring new technologies and approaches" },
            { title: "Excellence", text: "Committed to delivering exceptional quality in every project" },
            { title: "Integrity", text: "Honest communication and ethical business practices" },
            { title: "Partnership", text: "Collaborating closely to achieve shared success" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/30 hover:to-purple-600/30 p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-blue-500/30 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Proven Expertise", stat: "10+ Years", desc: "Delivered websites & SaaS products for startups & enterprises." },
            { title: "Client-Centric", stat: "98% Retention", desc: "We prioritize your goals & tailor solutions to your needs." },
            { title: "Timely Delivery", stat: "95% On-Time", desc: "Agile methodology ensures projects are delivered on schedule." },
            { title: "Comprehensive Services", stat: "360° Solutions", desc: "From concept to support — full lifecycle coverage." },
            { title: "Robust Security", stat: "0 Breaches", desc: "Enterprise-grade security for your apps & data." },
            { title: "Results-Driven", stat: "70% ROI", desc: "Focused on measurable business impact & growth." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black hover:from-blue-600/20 hover:to-purple-700/20 p-6 rounded-2xl border border-white/10 transition-all duration-500 shadow-lg hover:shadow-purple-500/30"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="mt-3 text-sm text-cyan-400 font-semibold">{item.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sonia Kapoor",
              role: "Owner, Urban Threads Boutique",
              text: "They transformed our outdated site into a modern platform that our customers love. Highly recommended!",
            },
            {
              name: "Rohan Desai",
              role: "Product Manager, CloudProX",
              text: "Their backend and frontend development skills are top-notch. Delivered scalable custom solutions with perfection.",
            },
            {
              name: "Aarav Mehta",
              role: "Co-founder, LaunchWise",
              text: "They delivered a sleek, high-performing website that doubled our signups within weeks.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-white/10 hover:shadow-blue-500/20 transition-all duration-500"
            >
              <p className="text-gray-300 italic">“{review.text}”</p>
              <div className="mt-4">
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
                <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-10 rounded-2xl inline-block shadow-lg hover:shadow-purple-400/40 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-200 mb-4">
            Join 50+ global clients who trust WebNexa Web Solutions
          </p>
          <a
            href="mailto:contact@inzovia.com"
            className="bg-white text-gray-900 font-semibold px-2 py-2 rounded-full hover:bg-gray-200 transition-all"
          >
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
