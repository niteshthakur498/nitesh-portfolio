// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
// import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

import { experienceItem } from "@/interfaces/experienceItem";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#products", label: "Projects" },
    { href: "/contact", label: "Contact" },
];


//Should be taken from DB/CMS
// export const statistics = [
//     { value: '1k+', label: '' },
//     { value: '500+', label: '' },
//     { value: '250k+', label: '' },
// ];

export const socialMedia = [
    { href: "https://www.linkedin.com/in/nitesh-thakur-421b3016b/", label: "Linkedin" },
    { href: "https://github.com/niteshthakur498", label: "Github" },
    { href: "https://www.instagram.com/that_nitesh_/", label: "Instagram" }
];

export const coreTech = [
    { label: "Java" },
    { label: "JavaScript" },
    { label: "PL/SQL" },
    { label: "ReactJS" }
]

export const familiarTech = [
    { label: "NextJS" },
    { label: "Python" }
]

export const tools = [
    { label: "Git/Github" },
    { label: "JavaScript" }
]

export const certificatons = [
    { label: "Git/Github" },
    { label: "Agile Methodolgies" }
]

export const experience: experienceItem[] = [
    {
        title: "",
        designation: "Staff Consultant",
        org: "Oracle Financial Services Software(OFSS)",
        location: "Bangalore, India",
        timeInterval: "07/2022 - Current",
        workList: ["Collaborated on stages of the Software Development lifecycle from requirement gathering, translating them into fully functional features and production releases on different modules of Flexcube Lending, Derivatives, Options, Money Markets, etc.",
            "Worked with Oracle Banking Treasury development and testing teams to design and implement the functionality and improve performance of Risk-Free Rates implementation across modules to meet client requirements for functionality, scalability, and performance.",
            "Contributed to code correction and modification to improve the performance of the End of Day Processing",],


    },
    {
        title: "",
        designation: "Associate Consultant",
        org: "Oracle Financial Services Software(OFSS)",
        location: "Bangalore, India",
        timeInterval: "09/2020 - 07/2022",
        workList: ["Worked on Creating new Screens and adding UI functionality to existing screens.",
            "Fixed critical issues faced on the platform during Tests performed by different Teams.",
            "Worked with Oracle Banking Treasury development and testing teams to design and implement the functionality and improve performance of Risk-Free Rates implementation across modules to meet client requirements for functionality, scalability, and performance."],


    }
]

