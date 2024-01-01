"use client"
import { motion } from "framer-motion";

export default function UnOrderedListwithAnimaton({ listValues }: { listValues: { label: string }[] }) {
    const container = {
        hidden: { opacity: 0, y: 0 },
        visible: (i = 1) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.01, staggerChildren: 0.04, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.3
            },
        },
    };

    return (<motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className='flex flex-col gap-2 pl-2 mt-4'>
        {listValues.map((item) => (
            <motion.li
                variants={child}
                key={item.label} className='leading-normal text-md'>
                {item.label}
            </motion.li>
        ))}
    </motion.ul>);
}