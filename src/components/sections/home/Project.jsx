import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Code, ExternalLink } from 'lucide-react';

import shoppingMania from '../../../assets/shopping mania.png';
import weatherApp from '../../../assets/wheather app.png';
import netflixClone from '../../../assets/netflix clone.png';
import expenseTracker from '../../../assets/expense tracker.png';
import socialMediaDashboard from '../../../assets/social media dashboard.png';

const content = [
    {
        image: shoppingMania,
        title: "Shopping Mania",
        content: 'Shopping Mania is a web application developed using HTML, CSS, Python, and SQLite3 for managing and processing online shopping data. It features user-friendly interfaces for browsing products, adding items to the cart, and handling orders. The backend ensures seamless interaction with a database, offering a smooth shopping experience.',
        technologies: ['HTML', 'CSS', 'Python', 'SQLite'],
        url: ''
    },
    {
        image: weatherApp,
        title: "Weather App",
        content: 'The Weather project is a web application built with HTML, CSS, and JavaScript to provide real-time weather updates for any location. It allows users to search for cities and displays current weather conditions, temperature, and forecasts. The interface is intuitive and responsive, offering a seamless user experience.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
        url: ''
    },
    {
        image: netflixClone,
        title: "Netflix Clone Application",
        content: 'The Netflix Clone project is a web application built with HTML, CSS, and JavaScript to replicate the user interface and features of Netflix. It allows users to browse through movies and TV shows, view trailers, and experience a similar layout and design to the original streaming platform. The interface is sleek, responsive, and designed to mimic the Netflix experience.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: ''
    },
    {
        image: expenseTracker,
        title: "Expense Tracker Application",
        content: 'The Expense Tracker project is a web application built with HTML, CSS, and JavaScript to help users manage and track their personal finances. It allows users to input their income and expenses, categorize them, and view summaries of their spending. The interface is clean, user-friendly, and responsive, providing an efficient way to monitor financial habits.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: ''
    },
    {
        image: socialMediaDashboard,
        title: "Social Media Dashboard",
        content: 'The Social Media Dashboard project is a web application built with HTML, CSS, and JavaScript to provide a centralized platform for monitoring social media activity. Users can view and analyze engagement metrics such as likes, shares, and followers, with a visually appealing and responsive design. The interface is designed for ease of use, offering real-time insights into social media performance.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: ''
    },
];

const Project = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className=" py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-800"
                >
                    My <span className="text-orange-500">Projects</span>
                </motion.h2>

                {content.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`
                            flex flex-col md:flex-row items-center 
                            bg-white shadow-lg rounded-xl overflow-hidden 
                            mb-16 p-6 
                            ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
                        `}
                        onHoverStart={() => setHoveredProject(index)}
                        onHoverEnd={() => setHoveredProject(null)}
                    >
                        {/* Project Image */}
                        <div className="md:w-1/2 w-full relative group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-lg shadow-md 
                                transform transition-transform duration-300 
                                group-hover:scale-105"
                            />
                            {/* {hoveredProject === index && (
                                <div className="absolute inset-0 bg-black bg-opacity-40 
                                    flex items-center justify-center 
                                    transition-all duration-300">
                                    <div className="flex space-x-4">
                                        <button className="bg-white p-3 rounded-full 
                                            hover:bg-orange-500 hover:text-white 
                                            transition-colors">
                                            <Eye />
                                        </button>
                                        <button className="bg-white p-3 rounded-full 
                                            hover:bg-orange-500 hover:text-white 
                                            transition-colors">
                                            <Code />
                                        </button>
                                    </div>
                                </div>
                            )} */}
                        </div>

                        {/* Project Details */}
                        <div className="md:w-1/2 w-full md:pl-8 mt-6 md:mt-0">
                            <h3 className="text-3xl font-bold mb-4 text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.content}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-orange-100 text-orange-800 
                                        rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            {/* <div className="flex space-x-4">
                                <button className="
                                    flex items-center gap-2 
                                    bg-orange-500 text-white 
                                    px-5 py-2 rounded-full 
                                    hover:bg-orange-600 
                                    transition-colors
                                ">
                                    <ExternalLink size={18} />
                                    Live Demo
                                </button>
                                <button className="
                                    flex items-center gap-2 
                                    border border-orange-500 text-orange-500 
                                    px-5 py-2 rounded-full 
                                    hover:bg-orange-500 hover:text-white 
                                    transition-colors
                                ">
                                    <Code size={18} />
                                    Source Code
                                </button>
                            </div> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;