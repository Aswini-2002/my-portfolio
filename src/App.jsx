import { Analytics } from "@vercel/analytics/react";
import Navbar from "./common/layout/navbar/Navbar";
import Footer from "./common/layout/footer/Footer";
import Home from "./components/sections/home/Home";
import Project from "./components/sections/home/Project";
import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/Skills";
import Contact from "./components/sections/contact/Contact";
import ChatWidget from "./components/common/chatbot/ChatWidget";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="bg-ink text-paper min-h-screen">
        <div className="grain-overlay" />
        <Navbar />
        <main>
          <Home />
          <Project />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <ChatWidget />
      <Analytics />
    </>
  );
};

export default App;
