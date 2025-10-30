import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2oxd4dr", // ✅ Your EmailJS service ID
        "template_k9bq1vs", // ✅ Your EmailJS template ID
        form.current,
        "TARr5KQrPrPyUlO5I" // ✅ Your EmailJS public key
      )
      .then(
        () => {
          setShowPopup(true); // ✅ Show success popup
          e.target.reset();

          // Auto close popup after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center relative">
      <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400 text-center">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/1 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            <input
              type="text"
              name="user_company"
              placeholder="Company Name"
              className="p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
            className="w-full mt-4 p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 hover:from-green-400 hover:to-teal-400 text-black font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Office Info */}
        <div className="bg-white/1 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-teal-400 text-2xl" />
            <p className="text-gray-200 leading-relaxed">
              <span className="font-semibold text-white">Office:</span>
              <br />
              B-51, Lawrence Road, Industrial Area,
              <br />
              Near Seven Heaven Hall, Delhi 110035
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-teal-400 text-2xl" />
            <p>
              <span className="font-semibold text-white">Phone:</span>
              <br />+91 8920648418
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-teal-400 text-2xl" />
            <p>
              <span className="font-semibold text-white">Email:</span>
              <br />
              abdulaziz86723@gmail.com
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg mt-4">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=B-51,+Lawrence+Road,+Industrial+Area,+Near+Seven+Heven+Hall,+Delhi+110035&output=embed"
              width="100%"
              height="220"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ✅ Success Popup (Top Center) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="fixed top-20  transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-teal-400 text-black font-semibold px-8 py-4 rounded-xl shadow-2xl text-center w-[90%] sm:w-auto z-50"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
