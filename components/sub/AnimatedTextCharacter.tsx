import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, classnames, delay }: { text: string, classnames?: string, delay?: number }) => {
    let letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { delay: 0.6, staggerChildren: 0.08, delayChildren: 0.08 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: 8,
            transition: {
                type: "spring",
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
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}

                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;