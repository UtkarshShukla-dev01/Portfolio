import { useState } from "react";

import About from "./Components/About";

import Resume from "./Components/Resume";

import Projects from "./Components/Projects";

import Contact from "./Components/Contact";

import Sidebar from "./Components/Sidebar";

import Navigation from "./Components/Navigation";

import Certificates from "./Components/Certificates"; // Import Certificates component

import "./App.css";

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
        return "Certificates"; // Ensure this matches the navigation

      case "contact":
        return "Contact";

      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex">
      <Sidebar />

      <div className="ml-[340px] flex-1 p-6">
        <div className="bg-[#1E1E1F] rounded-3xl min-h-[calc(100vh-64px)] relative">
          <div className="flex items-center justify-between px-6 pt-6">
            <div>
              <h2 className="text-[#FAFAFA] text-[32px] font-bold font-[Poppins] mb-2">
                {getHeading()}
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
            </div>

            <Navigation
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
          </div>

          <div className="px-6 pb-6 pt-4">
            {currentSection === "about" && <About />}
            {currentSection === "resume" && <Resume />}
            {currentSection === "projects" && <Projects />}
            {currentSection === "certificate" && <Certificates />}{" "}
            {/* Ensure this matches the navigation */}
            {currentSection === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
