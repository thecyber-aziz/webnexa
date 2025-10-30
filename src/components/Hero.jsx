import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 animate-gradient"
    >
      {/* Floating background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300/30 rounded-full blur-2xl" />
      </div>

      {/* Top text */}
      <p className="absolute top-16 text-3xl md:text-5xl text-blue-400 font-bo z-10 neon-text">
  Your Digital Partner for Growth
</p>


      {/* Main heading */}
      <h1 className="text-5xl md:text-6xl text-gray-900 font-bold mt-20 z-10">
        We Build Modern Web Experiences
      </h1>

      {/* Sub text */}
      <p className="mt-4 text-2xl text-gray-700 max-w-xl z-10">
        Grow your business with our professional web design and development services.
      </p>

      {/* Buttons */}
     <div className="flex flex-col md:flex-row gap-6 mt-8 z-10">
  {/* Get Started Button → Contact Page */}
  <Link
    to="/contact"
    className="
      group relative overflow-hidden px-6 py-3 rounded-md text-white font-semibold
      bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400
      text-lg font-medium
      shadow-lg transform transition-all duration-300 hover:scale-105
    "
  >
    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 animate-gradient bg-[length:200%_200%] opacity-80 rounded-md"></span>
    <span className="relative flex items-center gap-3 z-10">
      Get Started
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
    </span>
  </Link>

  {/* Our Services Button → Services Page */}
  <Link
    to="/services"
    className="
      group relative overflow-hidden px-6 py-3 rounded-md text-black font-semibold
      bg-white
      text-lg font-medium
      shadow-lg transform transition-all duration-300 hover:scale-105
    "
  >
    <span className="absolute inset-0 animate-gradient bg-[length:200%_200%] opacity-80 rounded-md"></span>
    <span className="relative flex items-center gap-3 z-10">
      Our Services
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
    </span>
  </Link>
</div>

    </section>
  );
};

export default Hero;
