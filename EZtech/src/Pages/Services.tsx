import { useEffect } from "react";
import {
  Cpu,
  EarthIcon,
  Database,
  MessageSquare,
  BarChart,
  Layout,
} from "lucide-react";
import ShimmerButton from "../components/ui/shimmer-button";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
// import img1 from "../assets/DigitalTransformation.jpg";
import img1 from "../assets/Digital1.jpg"
import img2 from "../assets/Ai_ml1.jpg";
// import img2 from "../assets/Ai_ml.jpg";
import img3 from "../assets/web-scraping2.jpeg";
// import img3 from "../assets/web-scraping.jpeg";
import img4 from "../assets/customsolution.webp";
// import img4 from "../assets/custom.webp";
import img5 from "../assets/dataanalytics1.webp";
// import img5 from "../assets/Dataanalytics.jpg";
import img6 from "../assets/dashboard1.jpeg";
// import img6 from "../assets/dashboard.jpeg";

// Define the TypeScript type for a service
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  path: string;
}

// Service data with background image for each service
const services: Service[] = [
  {
    icon: <Cpu size={24} />,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions.",
    image: img1,
    path: "/services/digital",
  },
  {
    icon: <Database size={24} />,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Harness the power of AI and ML, including advanced forecasting capabilities.",
    image: img2,
    path: "/services/ai",
  },
  {
    icon: <EarthIcon size={24} />,
    title: "Web Scraping Solutions",
    description:
      "Extract valuable data from the web efficiently and accurately.",
    image: img3,
    path: "/services/web-scraping",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Custom Solutions",
    description:
      "Share your unique problem, and we'll create a tailored solution.",
    image: img4,
    path: "/services/custom",
  },
  {
    icon: <BarChart size={24} />,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights for your business.",
    image: img5,
    path: "/services/data-analytics",
  },
  {
    icon: <Layout size={24} />,
    title: "Dashboards",
    description:
      "Visualize your data with interactive and intuitive dashboards.",
    image: img6,
    path: "/services/dashboards",
  },
];

const Services = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.1, // Percentage of the element visible to trigger animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100"
      ref={ref}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 relative group hover:scale-105 transition-transform duration-300 ease-in-out">
          Our Services
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[200px] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform group-hover:scale-110 group-hover:opacity-90"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Hidden Text (Appears on Hover) */}
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center p-6 opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white z-10">
                  {service.title}
                </h3>
                <p className="text-white z-10">{service.description}</p>
                <ShimmerButton
                  className="shadow-2xl mt-3"
                  onClick={() => navigate(service.path)}
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Click Me!
                  </span>
                </ShimmerButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
