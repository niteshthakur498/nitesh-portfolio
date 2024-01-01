"use client"
import { motion } from "framer-motion";
export default function SubHeading({ children }: { children?: React.ReactNode }) {
    return (
        <motion.h1
            className="font-semibold text-primary text-1xl uppercase leading-8 tracking-wide"
            initial={{
                opacity: 0,
                x: 100
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.3
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            {children}
        </motion.h1>
    );
}