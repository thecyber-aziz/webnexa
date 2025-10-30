import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "We design and develop custom, scalable, and mobile-responsive websites that align with your business needs—built for speed, SEO, and seamless user experience across all devices.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Digital Transformation",
      desc: "We modernize outdated systems, streamline operations, and build future-ready digital solutions that drive business growth.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "App Development",
      desc: "We create custom mobile apps with smooth performance and user-friendly design to help your business connect and grow on any device.",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "Managed Services",
      desc: "We handle your entire tech project—from planning to final delivery. We bring the right team and tools to deliver results that help your business grow.",
      gradient: "from-teal-400 to-green-500",
    },
    {
      title: "Custom Software",
      desc: "We design and build tailored software solutions that fit your unique business needs, improving efficiency and driving growth.",
      gradient: "from-pink-500 to-red-400",
    },
    {
      title: "ERP Solutions",
      desc: "We develop integrated ERP systems that streamline your business processes and improve overall efficiency.",
      gradient: "from-indigo-500 to-sky-500",
    },
    {
      title: "UI/UX Design",
      desc: "We craft intuitive and engaging user interfaces that deliver seamless experiences and keep your customers coming back.",
      gradient: "from-fuchsia-500 to-violet-500",
    },
  ];

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
          Our Services
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
          Solutions That Drive Business Growth
        </p>
        <p className="text-gray-400 mt-2 max-w-3xl mx-auto">
          We offer a comprehensive range of IT services designed to help your business thrive in the digital landscape.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl p-[1px] shadow-lg hover:shadow-${service.gradient.split(" ")[1]}/50 transition-all duration-500`}
          >
            <div className="bg-gray-950 rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <h3
                  className={`text-2xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <a
                href="#"
                className={`mt-5 inline-block text-sm font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300`}
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 px-8 rounded-2xl inline-block shadow-lg hover:shadow-purple-400/40 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Have a specific project in mind?
          </h3>
          <p className="text-gray-200 mb-5">
            Get a free consultation and discover how we can bring your ideas to life.
          </p>
          <a
            href="mailto:abdulaziz86723@gmail.com"
            className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
