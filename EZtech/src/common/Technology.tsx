import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSubscribeButton } from "../components/ui/animated-subscribe-button";
import { IoAdd } from "react-icons/io5";
const technology = () => {
  return (
    <div className="items-center translate-x-24 flex mb-10 pl-8 space-x-32">
        <div className="items-center ">
            <h1 className="font-extrabold text-xl mb-2">Service Offring</h1>
            <div className="text-center ml-10">
            <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                    <motion.span className="group inline-flex items-center text-center"
                    whileHover={{rotate:360}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <IoAdd/>
                    </motion.span>
                }
                changeText={
                    <span className="group inline-flex items-center text-center">
                    <Minus className="text-center"/>
                    </span>
                }
            />
            </div>
        </div>
        <div className="items-center translate-x-10">
            <h1 className="font-extrabold text-xl mb-2">Bussiness Operation</h1>
            <div className="text-center ml-10">
            <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                    <motion.span className="group inline-flex items-center text-center"
                    whileHover={{rotate:360}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <IoAdd/>
                    </motion.span>
                }
                changeText={
                    <span className="group inline-flex items-center text-center">
                    <Minus className="text-center"/>
                    </span>
                }
            />
            </div>
        </div>
        <div className="items-center translate-x-20">
            <h1 className="font-extrabold text-xl mb-2">Artifical Intelligence</h1>
            <div className="text-center ml-10">
            <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                    <motion.span className="group inline-flex items-center text-center"
                    whileHover={{rotate:360}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <IoAdd/>
                    </motion.span>
                }
                changeText={
                    <span className="group inline-flex items-center text-center">
                    <Minus className="text-center"/>
                    </span>
                }
            />
            </div>
        </div>
        <div className="items-center translate-x-32">
            <h1 className="font-extrabold text-xl mb-2">Information Technology</h1>
            <div className="text-center ml-10">
            <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                    <motion.span className="group inline-flex items-center text-center"
                    whileHover={{rotate:360}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <IoAdd/>
                    </motion.span>
                }
                changeText={
                    <span className="group inline-flex items-center text-center">
                    <Minus className="text-center"/>
                    </span>
                }
            />
            </div>
        </div>

    </div>
  )
}

export default technology