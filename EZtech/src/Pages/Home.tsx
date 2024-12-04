import { useEffect,useState } from "react";
import PulsatingButton from '../components/ui/pulsating-button';
import Globe from "@/components/ui/globe";

// import Technology from "../common/Technology";
import HomeTech from "../common/HomeTech";
const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
    return (
      <>
        <section className="py-20 px-4 sm:px-6 mt-16 lg:px-8 overflow-hidden text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="relative">
            <div className="relative flex  items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
              <span className="pointer-events-none border-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-white text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Globe
              </span>
              <Globe className="top-28" />
              <div className="pointer-events-none absolute inset-y-28 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>

          <div className="container mx-auto absolute  inset-52 inset-x-0">
          <h2
  className={`text-4xl sm:text-5xl font-bold mb-4 ${
    isVisible ? "animate-fadeIn" : "opacity-0"
  } text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:bg-gradient-to-l`}
  style={{
    animationDelay: "0.2s",
    transition: "all 0.5s ease-in-out",
  }}
>
  Innovative <span className=" font-tinos">Tech Solutions</span> for Your Business
</h2>

            <p
              className={`text-xl mb-8 max-w-2xl font-tinos mx-auto ${
                isVisible ? "animate-fadeIn" : "opacity-0"
              } text-gray-600`}
              style={{ animationDelay: "0.4s" }}
            >
              EZ Tech provides cutting-edge technological solutions to transform
              your business and solve complex problems.
            </p>
            <a
              href="#contact"
              className={`btn btn-primary ${
                isVisible ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <PulsatingButton className="ml-[46%] sm:-translate-y-3/4 lg:translate-y-3">Get Started</PulsatingButton>;
            </a>
          </div>
        </section>
        
        {/* <Technology/> */}
        <HomeTech/>
        </>
    );
  };
  
  export default Home;
  