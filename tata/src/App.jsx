import { useState } from "react";

import About from "./Components/About";

import Resume from "./Components/Resume";

import Projects from "./Components/Projects";

import Contact from "./Components/Contact";

import Sidebar from "./Components/Sidebar";

import Navigation from "./Components/Navigation";

import Certificates from "./Components/Certificates"; // Import Certificates component

import "./App.css";

import BottomNavigation from "./Components/BottomNavigation";

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  const getHeading = () => {
    switch (currentSection) {
      case "about":
        return "About Me";
      case "resume":
        return "Resume";
      case "projects":
        return "Projects";
      case "certificate":
        return "Certificates";
      case "contact":
        return "Contact";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#121212] flex flex-col md:flex-row">
        <Sidebar />

        <div className="w-full max-w-[1100px] mx-auto p-6 md:ml-[340px] pb-28 md:pb-0">
          <div className="bg-[#1E1E1F] rounded-3xl min-h-[calc(100vh-64px)] relative w-[550px] md:w-full mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 pt-6">
              <div>
                <h2 className="text-[#FAFAFA] text-[32px] font-bold font-[Poppins] mb-2">
                  {getHeading()}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <Navigation
                  currentSection={currentSection}
                  setCurrentSection={setCurrentSection}
                />
              </div>
            </div>

            <div className="px-6 pb-6 pt-4">
              {currentSection === "about" && <About />}
              {currentSection === "resume" && <Resume />}
              {currentSection === "projects" && <Projects />}
              {currentSection === "certificate" && <Certificates />}
              {currentSection === "contact" && <Contact />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Navigation */}
      <div
        className="fixed left-0 w-full z-[9999] md:hidden"
        style={{ bottom: 0 }}
      >
        <div className="bg-gradient-to-r from-[#232325]/80 to-[#232325]/60 rounded-t-3xl shadow-xl px-2 py-2 border-t border-[#333]/60 backdrop-blur-lg bg-opacity-80">
          <BottomNavigation
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>
      </div>
    </>
  );
}
export default App;
