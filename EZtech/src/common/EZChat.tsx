import techimg from "../assets/EZCHAT.webp";
import { motion } from "framer-motion";

const EZChat = () => {
  return (
    <div className="text-center py-20 px-6 bg-gray-50">
      {/* Heading with Gradient Text */}
      <motion.div
        className="text-transparent bg-clip-text text-4xl font-tinos font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:bg-gradient-to-l"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >Chat Beyond Limits with EZChat
      </motion.div>

      {/* Description */}
      <motion.div
        className="mt-10 text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Multiple AI Models, One Platform:
        Say goodbye to juggling multiple subscriptions. EZChat unites world-class language models like GPT-4 and Claude under one roof for your convenience.
        User-Friendly and Versatile:
With an intuitive interface, rich features, and secure communication, EZChat is designed for professionals, students, and curious minds alike.
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

export default EZChat;
