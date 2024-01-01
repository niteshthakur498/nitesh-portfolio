"use client"
import SubHeading from "@/components/sub/SubHeading";
import TitleText from "@/components/sub/TitleText";
import { motion } from "framer-motion";
import { useState } from "react";
const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };
export default function Contact() {
    const [buttonMessage, setButtonMessage] = useState("Send Message");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="min-h-screen flex items-center flex-col w-full py-24 lg:px-10 bg-black"

            >
                <motion.div className="flex max-w-[1440px] mx-auto w-full  py-20 px-8 lg:px-16 bg-bg-primary flex-col gap-8 items-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <div className="mb-10 flex flex-col gap-10 items-center">
                        <TitleText text="Get In Touch !" />
                        <div className="text-center">
                            <div className="text-primary font-montserrat ">
                                Got a question, proposal or project or want to work <br />{" "}
                                together on something? Feel free to reach out.
                            </div>
                        </div>
                    </div>
                    <form action=""
                        className="flex flex-col gap-10 w-full"
                    >
                        <div className="flex justify-between flex-wrap gap-y-10">
                            <div className="flex flex-col min-w-[350px]">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    placeholder="What's Your Name?"
                                    name="name"
                                    id="name"
                                    type="text"
                                    required
                                    className="input"
                                />
                            </div>
                            <div className="flex flex-col min-w-[350px]">
                                <label htmlFor="name">Your Email</label>
                                <input
                                    placeholder="What's Your Email?"
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    className="input"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can."
                                required
                                className="input leading-10"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="border-2 border-primary px-8 py-3 text-primary">
                                {loading ? "Sendng..." : buttonMessage}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
}