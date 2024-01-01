import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, classnames, delay }: { text: string, classnames?: string, delay?: number }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0, y: 0 },
        visible: (i = 1) => ({
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.18, delayChildren: 1.5 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                ease: "linear",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                ease: "linear",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={classnames ? classnames : "flex"}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;