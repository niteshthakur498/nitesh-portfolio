"use client"
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { log } from "console";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(false);
    }, [])
    const menuToggle = () => {
        setIsOpen(!isOpen);

    };

    return (
        <header>
            <nav className="w-full flex justify-between items-center px-4 lg:px-12 pt-10 pb-4 bg-transparent fixed z-50">
                <div className="transition-all duration-180 ease-linear font-extrabold font text font-montserrat text-lg tracking-wide hover:scale-105 hover:tracking-wider uppercase">
                    <Link href={'/'} onClick={() => setIsOpen(false)}>
                        <div className="flex flex-col items-center leading-5">
                            <span className="">Nitesh</span>
                            <span>Thakur</span>
                        </div>

                    </Link>
                </div>
                <div onClick={menuToggle}
                    className="flex items-center w-10 h-6 cursor-pointer group">
                    {isOpen ? <div
                        className="
                                transition-all
                                duration-150
                                before:content-['']
                                before:absolute
                                before:w-10
                                before:h-[4px]
                                before:bg-white
                                before:rounded-none
                                before:rotate-45
                                before:transition-all
                                before:duration-150
                                after:content-['']
                                after:absolute
                                after:w-10
                                after:h-[4px]
                                after:bg-white
                                after:rounded-none
                                after:-rotate-45
                                after:transition-all
                                after:duration-150
                                lg:group-hover:before:rotate-0
                                lg:group-hover:after:rotate-0
                            "
                    >
                    </div>
                        :
                        <div
                            className="
                                transition-all
                                duration-150
                                before:content-['']
                                before:absolute
                                before:w-10
                                before:h-[4px]
                                before:bg-white
                                before:rounded-none
                                before:-translate-y-3
                                before:transition-all
                                before:duration-150
                                after:content-['']
                                after:absolute
                                after:w-10
                                after:h-[4px]
                                after:bg-white
                                after:rounded-none
                                after:translate-y-2
                                after:transition-all
                                after:duration-150
                                lg:group-hover:before:translate-x-2
                                lg:group-hover:after:-translate-x-2
                            "
                        >
                        </div>
                    }
                </div>
            </nav >

            <AnimatePresence>
                {isOpen && <Menu handleClick={menuToggle} />}
            </AnimatePresence>


        </header>
    );
}