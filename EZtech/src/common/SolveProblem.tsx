import techimg from "../assets/problemsolution.avif";
import { motion } from "framer-motion";

const SolveProblem = () => {
  return (
    <div className="text-center py-20 px-6 bg-gray-50">
      {/* Heading with Gradient Text */}
      <motion.div
        className="text-transparent bg-clip-text text-4xl font-tinos font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:bg-gradient-to-l"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >Innovative Solutions for Your Toughest Problems
      </motion.div>

      {/* Description */}
      <motion.div
        className="mt-10 text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >Think Smarter, Act Faster:
By leveraging state-of-the-art technologies like Artificial Intelligence, predictive analytics, and process automation, we decode complexity with unmatched precision.
Tailored Strategies, Real Results:
Every problem is unique, and so is our approach. We craft solutions that fit your needs, ensuring optimized outcomes and long-term efficiency.
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative max-w-3xl rounded-lg transform hover:scale-105 transition-transform duration-500 overflow-hidden shadow-lg">
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

export default SolveProblem;
