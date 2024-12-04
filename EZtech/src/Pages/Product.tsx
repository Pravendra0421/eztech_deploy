import { Bot } from "lucide-react"
import {motion} from "framer-motion"
import { useState } from "react"
import img1 from "../assets/EZCHAT1.webp"
import img2 from "../assets/EZDash.webp"
// import img2 from "../assets/product2.avif"
import img3 from "../assets/EZNote.jpg"
// import img3 from "../assets/product3.jpg"
import img4 from "../assets/product1.jpeg"
import ShimmerButton from "../components/ui/shimmer-button";
import { Link } from "react-router-dom"
const Product = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore=()=>{
        setIsExpanded(!isExpanded);
    };
  return (
    <section id="products" className="py-20 mb-14 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 relative group hover:scale-105  transition-transform duration-300 ease-in-out">
  Our Products
  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
</h2>

                            <motion.div
                            variants={{
                                hidden:{opacity:0},
                                show:{
                                    opacity:1,
                                    transition:{
                                        staggerChildren:0.1,
                                    },
                                },
                            }}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-2 h-96 md:grid-cols-2  lg:grid-cols-4 gap-4 max-w-full  mx-auto">
                           <motion.div
  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
  className="group relative flex flex-col justify-end bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[200px] min-w-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] overflow-hidden"
>
  {/* Background Image */}
  <img
    src={img1} // Replace with your image path
    alt="EZ Chat Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

  {/* Text Content */}
  <div
    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black bg-opacity-30 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
  >
    <Bot size={24} className="text-white mb-2" />
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
      EZ Chat
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
      {isExpanded
        ? "Experience the power of multiple LLMs in one place with EZ Chat. Access your favorite language models without individual subscriptions"
        : `${"Experience the power of multiple LLMs in one place with EZ Chat. Access your favorite language models without individual subscriptions.".substring(
            0,
            60
          )}...`}
      <span
        className="text-blue-600 cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? " Read less" : " Read more"}
      </span>
    </p>
    <ul className="list-disc list-inside text-white mb-4 text-sm sm:text-base">
      <li>Chat GPT 4.0 from OpenAI</li>
      <li>Claude 3.5 Sonnet from Anthropic</li>
      <li>And many more!</li>
    </ul>
    <Link to="/services/digital">
            <ShimmerButton className="shadow-2xl mt-3">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Check it out
                </span>
            </ShimmerButton>
            </Link>
  </div>
</motion.div>




<motion.div
  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
  className="group relative flex flex-col justify-end bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[200px] min-w-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] overflow-hidden"
>
  {/* Background Image */}
  <img
    src={img2} // Replace with your image path
    alt="EZ Chat Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

  {/* Text Content */}
  <div
    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black bg-opacity-30 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
  >
    <Bot size={24} className="text-white mb-2" />
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
      EZ Dash
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
      {isExpanded
        ? "Experience the power of unified data visualization with EZDash. Access and manage all your dashboards, metrics, and data insights in one place, without the need for multiple tools or subscriptions. "
        : `${"Experience the power of unified data visualization with EZDash. Access and manage all your dashboards, metrics, and data insights in one place, without the need for multiple tools or subscriptions.".substring(
            0,
            60
          )}...`}
      <span
        className="text-blue-600 cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? " Read less" : " Read more"}
      </span>
    </p>
    <ul className="list-disc list-inside text-white mb-4 text-sm sm:text-base">
      <li>Tableau</li>
      <li> Power BI, Grafana</li>
      <li>And many more!</li>
    </ul>
    <Link to="/services/digital">
    <ShimmerButton className="shadow-2xl mt-3">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Check it out
                </span>
            </ShimmerButton>
    </Link>
  </div>
</motion.div>

<motion.div
  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
  className="group relative flex flex-col justify-end bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[200px] min-w-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] overflow-hidden"
>
  {/* Background Image */}
  <img
    src={img3} // Replace with your image path
    alt="EZ Chat Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

  {/* Text Content */}
  <div
    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black bg-opacity-30 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
  >
    <Bot size={24} className="text-white mb-2" />
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
      EZ Note
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
      {isExpanded
        ? "Experience the power of seamless note-taking and organization with EZNote. Access all your ideas, tasks, and documents in one place without juggling multiple apps or subscriptions"
        : `${"Experience the power of seamless note-taking and organization with EZNote. Access all your ideas, tasks, and documents in one place without juggling multiple apps or subscriptions".substring(
            0,
            60
          )}...`}
      <span
        className="text-blue-600 cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? " Read less" : " Read more"}
      </span>
    </p>
    <ul className="list-disc list-inside text-white mb-4 text-sm sm:text-base">
      <li>Microsoft OneNote</li>
      <li>Evernote, Google Keep</li>
      <li>And many more!</li>
    </ul>
    <Link to="/services/digital">
    <ShimmerButton className="shadow-2xl mt-3">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Check it out
                </span>
            </ShimmerButton>
    </Link>
  </div>
</motion.div>

<motion.div
  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
  className="group relative flex flex-col justify-end bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[200px] min-w-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] overflow-hidden"
>
  {/* Background Image */}
  <img
    src={img4} // Replace with your image path
    alt="EZ Chat Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

  {/* Text Content */}
  <div
    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black bg-opacity-30 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
  >
    <Bot size={24} className="text-white mb-2" />
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
      EZ Chat
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
      {isExpanded
        ? "Experience the power of multiple LLMs in one place with EZ Chat. Access your favorite language models without individual subscriptions"
        : `${"Experience the power of multiple LLMs in one place with EZ Chat. Access your favorite language models without individual subscriptions.".substring(
            0,
            60
          )}...`}
      <span
        className="text-blue-600 cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? " Read less" : " Read more"}
      </span>
    </p>
    <ul className="list-disc list-inside text-white mb-4 text-sm sm:text-base">
      <li>Chat GPT 4.0 from OpenAI</li>
      <li>Claude 3.5 Sonnet from Anthropic</li>
      <li>And many more!</li>
    </ul>
    <Link to="/services/digital">
    <ShimmerButton className="shadow-2xl mt-3">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Check it out
                </span>
            </ShimmerButton>
    </Link>
  </div>
</motion.div>

            </motion.div>
          </div>
        </section>

  )
}

export default Product