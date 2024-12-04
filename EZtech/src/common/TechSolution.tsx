import techimg from "../assets/tech_solution.jpg";
import { motion } from "framer-motion";

const TechSolution = () => {
  return (
    <div className="text-center py-20 px-6 bg-gray-50">
      {/* Heading with Gradient Text */}
      <motion.div
        className="text-transparent bg-clip-text text-4xl font-tinos font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:bg-gradient-to-l"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Let’s solve today’s problems with tomorrow’s technology
      </motion.div>

      {/* Description */}
      <motion.div
        className="mt-10 text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Empowering innovation through cutting-edge technology. At Tech Solution,
        we bridge the gap between complex challenges and seamless outcomes. Our
        solutions are tailored to revolutionize industries, optimize
        performance, and drive efficiency. Whether it’s streamlining processes,
        enhancing connectivity, or leveraging AI-powered insights, we are here
        to transform your vision into reality.
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative max-w-3xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src={techimg}
            alt="Tech Solution"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Shadow Effect */}
          <div className="absolute inset-0 "></div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechSolution;
