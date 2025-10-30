import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-pur to-blue-300 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-sm leading-relaxed text-gray-100">
            At <span className="font-medium text-white">WebNexa Web Solutions</span>, 
            we build fast, user-friendly digital solutions including custom websites, 
            mobile apps, software development, and digital transformation services 
            that help businesses grow online.
          </p>

          {/* Social Icons */}
           <div className="flex gap-4 mt-5">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/20 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:scale-110"
      >
        <FaLinkedin size={18} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/20 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 hover:scale-110"
      >
        <FaGithub size={18} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/20 rounded-full transition-all duration-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:scale-110"
      >
        <FaInstagram size={18} />
      </a>
    </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Web Development",
              "Digital Transformation",
              "Custom Software Development",
              "Mobile App Development",
              "Managed Services",
              "ERP Solutions",
            ].map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="hover:text-black transition-colors duration-200"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Industries</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Logistics & Supply Chain",
              "Retail & E-commerce",
              "Healthcare",
              "Finance & Banking",
              "Education & E-learning",
              "Manufacturing",
            ].map((industry) => (
              <li key={industry}>
                <Link
                  to="/industries"
                  className="hover:text-black transition-colors duration-200"
                >
                  {industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-black mt-1" />
              <p>Office: B-51, Lawrence Road, Industrial Area, Near Seven Heven Hall, Delhi 110035</p>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-black" />
              <span>+91 8920648418</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-black" />
              <span>+91 8595993064</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <a
                href="mailto:contact@inzovia.com"
                className="hover:text-black transition-colors duration-200"
              >
                abdulaziz86723@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-100">
        <p>© 2025 WebNexa Web Solutions Private Limited. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link
            to="/privacy"
            className="hover:text-black transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-black transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
