
import ContentText from "@/components/sub/ContentText";
import TitleText from "@/components/sub/TitleText";
import Link from "next/link";
import { coreTech, tools, familiarTech, certificatons, experience } from "../../constants";

import UnOrderedListwithAnimaton from "@/components/sub/UnorderedListwithAnimation";
import SubHeading from "@/components/sub/SubHeading";
import TimeLineListitem from "@/components/sub/TimeLineList";

export default function About() {

    return (
        <div className="min-h-screen flex items-center flex-col w-full py-24 lg:px-10 bg-black">
            <div className="flex min-h-screen max-w-[1440px] mx-auto w-full py-10 px-8 lg:px-16 bg-bg-primary flex-col gap-8">
                <TitleText text="Nitesh Thakur" />
                <div className="text-slate-400 lg:w-4/5 text-pretty">
                    <ContentText >
                        Software Developer based in Bangalore, India focused on building experiences
                        through design and technology.
                    </ContentText>
                    <ContentText >
                        I have always supported the idea of a minimalistic and user-focused approach to design and development, which I indeed
                        imbibe when building scalable and fully responsive applications.
                    </ContentText>
                    <div className="mt-4">
                        <ContentText>
                            Experienced software engineer with 3 years of expertise in the financial domain, possessing strong programming skills and a solution-oriented approach. Skilled in
                            developing robust software solutions to address complex problems. Actively seeks new opportunities to expand knowledge,
                            contribute to impactful projects, and thrive in a dynamic and supportive environment.
                        </ContentText>
                    </div>
                </div>
                <SubHeading >
                    <Link href={'/'} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                            <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                        </svg>
                        <p>Download Resume</p>
                    </Link>
                </SubHeading>

                <div>
                    <SubHeading >Work Experience :</SubHeading>
                    <TimeLineListitem listValues={experience} />
                </div>

                <div className="flex flex-wrap gap-x-52 gap-y-8">
                    <div className="flex flex-col flex-wrap gap-x-52 gap-y-8">
                        <div className="font-montserrat">
                            <SubHeading >Core Technology Skills :</SubHeading>
                            <UnOrderedListwithAnimaton listValues={coreTech} />
                        </div>
                        <div className="font-montserrat">
                            <SubHeading >Familiar Technologies :</SubHeading>
                            <UnOrderedListwithAnimaton listValues={familiarTech} />
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap gap-x-52 gap-y-8">
                        <div className="font-montserrat">
                            <SubHeading >Tools :</SubHeading>
                            <UnOrderedListwithAnimaton listValues={tools} />
                        </div>

                        <div className="font-montserrat">
                            <SubHeading >Certifications :</SubHeading>
                            <UnOrderedListwithAnimaton listValues={certificatons} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}