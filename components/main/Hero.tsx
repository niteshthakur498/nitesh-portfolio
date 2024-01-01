"use client"
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../sub/AnimatedTextCharacter";
import AnimatedTextWord from "../sub/AnimatedTextWord";
import Link from "next/link";
export default function Hero() {
    return (
        <div className="flex min-h-screen items-center max-w-[1440px] mx-auto w-full p-10 xl:p-0 justify-center lg:justify-start">
            <div className="">
                <div className="flex flex-col font-montserrat lg:w-7xl">
                    <motion.div className="text-primary text-5xl uppercase font-extrabold tracking-widest"
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                    >
                        Nitesh Thakur
                    </motion.div>
                    <AnimatedTextCharacter text="Software Engineer" classnames="flex text-3xl tracking-widest flex-wrapmt-2 font-semibold" delay={0.6} />
                    <AnimatedTextWord text="Curating Experiences with Technology and Code."
                        classnames="flex text-3xl tracking-widest flex-wrap mt-4" />
                </div>
            </div>
        </div >
    );
}