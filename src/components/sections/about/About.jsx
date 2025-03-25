// import { IoImagesOutline } from "react-icons/io5";
// import { MdOutlineArrowOutward } from "react-icons/md";

// const links = [{ title: "Connect with in linkedin", link: "https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/" }, { title: "View my resume", link: "https://drive.google.com/file/d/1XTNl8YvyWrBaLPFE-ySLmd676JKD0uO9/view?usp=drive_link" }]

// const About = () => {
//     return (
//         <>
//             <div className="flex h-screen items-center">
//                 <div className="w-1/2 flex justify-center">
//                     <IoImagesOutline className="h-[250px] w-[250px]" />
//                 </div>
//                 <div className="w-1/2 h-2/3 overflow-y-scroll hide-scrollbar">
//                     <h1 className="text-3xl font-bold">
//                         Hello,<br />My name is Aswini Prabha Rath.
//                     </h1>

//                     <p className="mt-8 text-justify">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, animi sapiente deserunt amet corporis quam? Ad sint quidem impedit modi? Repudiandae illum dolorum, quod ipsa mollitia distinctio nam fugit pariatur voluptate odit est praesentium totam quia nobis hic? Obcaecati assumenda quis error, magnam ab consequuntur molestiae nesciunt officiis aliquam voluptate dolorum sapiente aperiam laudantium dignissimos iure voluptatem animi repellat! Eos enim itaque consequatur mollitia tempore ipsam cupiditate possimus iure rem, facilis nam! Sapiente velit possimus dolorem perferendis ipsa officiis dignissimos deleniti totam, amet soluta tenetur culpa doloremque dolores quidem ut enim quasi quos obcaecati animi alias neque unde nihil consequatur!
//                     </p>

//                     <div className="mt-8">
//                         {links.map((items, id) => (
//                             <a href={items.link} target="_blank">
//                                 <div className="flex items-center gap-2 mt-2 hover:text-blue-500 cursor-pointer" key={id}>
//                                     <p className="font-medium">{items.title}</p>
//                                     <MdOutlineArrowOutward />
//                                 </div>
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default About;



import React from 'react';
import { motion } from 'framer-motion';
import {
    Linkedin,
    FileText,
    User,
    ArrowUpRight
} from 'lucide-react';
import pic from "../../../assets/pic1.jpg"

const links = [
    {
        title: "Connect with me on LinkedIn",
        link: "https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/",
        icon: Linkedin
    },
    {
        title: "View my Resume",
        link: "https://drive.google.com/file/d/1XTNl8YvyWrBaLPFE-ySLmd676JKD0uO9/view?usp=drive_link",
        icon: FileText
    }
];

const About = () => {
    return (
        <div className=" min-h-screen flex items-center py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative">
                            <div className="w-72 h-72 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full absolute -inset-4 blur-xl opacity-50"></div>
                            <div className="relative bg-white rounded-full shadow-xl ">
                                <img src={pic} alt="Aswini Prabha Rath" className="w-64 h-64  rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Hello, I'm <span className="text-orange-500">Aswini Prabha Rath</span>
                            </h1>

                            <div className="h-1 w-16 bg-orange-500 mb-6"></div>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                As a passionate frontend developer, I specialize in creating dynamic and interactive web experiences. My journey in web development is driven by a love for crafting elegant, user-centric solutions that blend creativity with technical expertise. I thrive on transforming complex ideas into intuitive, visually appealing digital interfaces that not only look great but also provide seamless user experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            {links.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center space-x-3 
                    text-gray-700 hover:text-orange-500 
                    transition-colors duration-300"
                                >
                                    <item.icon
                                        className="w-6 h-6 group-hover:text-orange-500 
                    transition-colors duration-300"
                                    />
                                    <span className="font-medium flex items-center">
                                        {item.title}
                                        <ArrowUpRight
                                            className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"
                                        />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;