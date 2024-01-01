import { socialMedia } from "@/constants";
import Link from "next/link";

export default function SocialMediaSection() {
    return (
        <div className="max-w-[1440px] mx-auto w-full max-md:p-10 max-lg:p-20 p-10 justify-center font-mono">
            <div className="grid gap-x-[45px] gap-y-[50px] w-full md:lg-cols-2 lg:grid-cols-3">
                {socialMedia.map((item, index) => {
                    return (
                        <Link key={index}
                            className={` px-6 py-6 border-[0.1rem] border-[#3e3e3e] ${item.label.toLowerCase()} group overflow-hidden
                            
                        `}
                            href={item.href}>

                            <div className={"flex justify-between items-center transition-all duration-150 group-hover:px-6 text-lg"}>
                                <div>
                                    <IconProvider type={item.label.toLowerCase()} />
                                </div>
                                <div>
                                    <span className="font-semibold">{item.label}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div >
    )
}


const GitHubIcon = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 920 1000"
            fill="currentColor"
            height="2rem"
            width="2rem"
            {...props}
        >
            <path d="M620 564c17.333 0 32.333 8.667 45 26 12.667 17.333 19 38.667 19 64s-6.333 46.667-19 64-27.667 26-45 26c-18.667 0-34.333-8.667-47-26-12.667-17.333-19-38.667-19-64s6.333-46.667 19-64 28.333-26 47-26m226-234c49.333 53.333 74 118 74 194 0 49.333-5.667 93.667-17 133s-25.667 71.333-43 96-38.667 46.333-64 65-48.667 32.333-70 41c-21.333 8.667-45.667 15.333-73 20s-48 7.333-62 8c-14 .667-29 1-45 1-4 0-16 .333-36 1s-36.667 1-50 1c-13.333 0-30-.333-50-1s-32-1-36-1c-16 0-31-.333-45-1s-34.667-3.333-62-8-51.667-11.333-73-20-44.667-22.333-70-41-46.667-40.333-64-65-31.667-56.667-43-96C5.667 617.667 0 573.333 0 524c0-76 24.667-140.667 74-194-5.333-2.667-5.667-29.333-1-80s15.667-97.333 33-140c61.333 6.667 137.333 41.333 228 104 30.667-8 72.667-12 126-12 56 0 98 4 126 12 41.333-28 81-50.667 119-68s65.667-27.333 83-30l26-6c17.333 42.667 28.333 89.333 33 140 4.667 50.667 4.333 77.333-1 80M462 844c110.667 0 194.333-13.333 251-40s85-81.333 85-164c0-48-18-88-54-120-18.667-17.333-40.333-28-65-32s-62.333-4-113 0-85.333 6-104 6h-2-2c-21.333 0-49-1.333-83-4s-60.667-4.333-80-5c-19.333-.667-40.333 1.667-63 7s-41.333 14.667-56 28c-34.667 30.667-52 70.667-52 120 0 82.667 28 137.333 84 164s139.333 40 250 40h4M302 564c17.333 0 32.333 8.667 45 26 12.667 17.333 19 38.667 19 64s-6.333 46.667-19 64-27.667 26-45 26c-18.667 0-34.333-8.667-47-26-12.667-17.333-19-38.667-19-64s6.333-46.667 19-64 28.333-26 47-26" />
        </svg>
    );
}



const LinkedinIcon = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="2rem"
            width="2rem"
            {...props}
        >
            <path
                fill="currentColor"
                d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 014 3.5z"
            />
        </svg>
    );
}

const InstagramIcon = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            height="2rem"
            width="2rem"
            {...props}
        >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
    );
}


const IconProvider = ({ type }: { type: string }): React.ReactNode => {
    {

        switch (type) {
            case 'instagram':
                return <InstagramIcon />
            case 'linkedin':
                return <LinkedinIcon />
            case 'github':
                return <GitHubIcon />
            default:
                return null
        }
    }
}