import Project from "./Project";
import { motion } from 'framer-motion';
import { Code, User, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import pic from "../../../assets/pic1.jpg"


const Home = () => {
    return (
        <>
            <div className="min-h-screen flex items-center  relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-8">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left space-y-6"
                        >
                            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600">
                                <User className="w-5 h-5" />
                                <span>Frontend Developer</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                                Hello, I'm <span className="text-orange-500">Aswini</span>
                            </h1>

                            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-700">
                                <Code className="w-6 h-6 text-blue-500" />
                                <p className="text-xl md:text-2xl font-light">
                                    Crafting Dynamic and Interactive Web Experiences with React.js
                                </p>
                            </div>

                            <div className="flex justify-center md:justify-start space-x-4 pt-6">
                                <Link to="/project">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:bg-orange-600 transition-colors"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span>View Projects</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Profile Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hidden md:flex justify-center items-center"
                        >
                            <div className="w-72 h-72 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow-xl flex items-center justify-center">
                                <div className="w-64 h-64 bg-white rounded-full shadow-inner">
                                    <img src={pic} alt="Aswini Prabha Rath" className="w-full h-full rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="px-4">
                <Project />
            </div>
        </>
    )
}
export default Home;