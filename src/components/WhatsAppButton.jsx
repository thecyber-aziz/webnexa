import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Pre-filled message (must be URL encoded)
  const message = encodeURIComponent("Hello! I'd like to know more about your service.");

  return (
    <a
      href={`https://wa.me/918920648418?text=${message}`} // ✅ your WhatsApp number with message
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 via-green-500 to-teal-500 text-white rounded-full p-4 shadow-lg hover:scale-110 hover:shadow-green-400/50 transition-all duration-300 animate-pulse z-50"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppButton;
