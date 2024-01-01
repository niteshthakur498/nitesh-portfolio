import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ handleClick }: { handleClick: () => void }) {
    const menuVars = {
        initial: {
            x: "100%",
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            x: "100%",
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };
    return (
        <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary text-black p-10 z-40 font-montserrat font-semibold tracking-widest"
        >
            <div className="flex h-full flex-col">
                <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center font-lora items-center gap-4 "
                >
                    {navLinks.map((link, index) => {
                        return (
                            <div className="overflow-hidden">
                                <MobileNavLink
                                    key={index}
                                    title={link.label}
                                    href={link.href}
                                    handleClick={handleClick}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}


const MobileNavLink = ({ title, href, handleClick }: { title: string, href: string, handleClick: () => void }) => {
    const mobileLinkVars = {
        initial: {
            y: "40vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            },
        },
    };
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-5xl uppercase text-white"
        >
            <Link href={href} onClick={handleClick}>{title}</Link>
        </motion.div>
    );
};