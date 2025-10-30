import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sideMenuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "-100%", transition: { type: "tween", duration: 0.2 } },
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <img src="/public/img/name.jpg" alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {menuItems.map(item => (
            <li key={item.name}>
              <Link to={item.link} className="hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded p-1 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-b z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              className="fixed top-17 left-0 w-3/4 max-w-xs h-[90%] bg-gradient-to-b from-white via-blue-50 to-white shadow-2xl z-50 p-6 flex flex-col"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sideMenuVariants}
            >
              {/* Header */}
              {/* <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-blue-600">Menu</h2>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div> */}

              {/* Menu Items */}
              <ul className="flex flex-col gap-6">
                {menuItems.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-lg font-medium bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 hover:from-blue-200 hover:via-blue-300 hover:to-blue-200 text-gray-800 transition-all duration-300 shadow-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Optional: Action Button */}
              <div className="mt-auto pt-6">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
