import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/sections/home/Home";
import Project from "../components/sections/home/Project";
import About from "../components/sections/about/About";
import Contact from "../components/sections/contact/Contact";


const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/About" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;