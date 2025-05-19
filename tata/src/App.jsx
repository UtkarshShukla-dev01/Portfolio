import { useState } from "react";

import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import Navigation from "./Components/Navigation";
import Certificates from "./Components/Certificates"; // Import Certificates component
import BottomNavigation from "./Components/BottomNavigation";

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
        return "Certificates";
      case "contact":
        return "Contact";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#121212] flex flex-col gap-5 xl:flex-row ">
        <Sidebar />

        <div className="w-full p-0 pb-28 xl:w-full xl:max-w-[1100px] xl:ml-[370px] xl:p-0 xl:pb-0 xl:mt-8 xl:mr-8">
          <div className="w-[95vw] max-w-[980px] mx-auto bg-[#1E1E1F] rounded-3xl min-h-[calc(100vh-64px)] relative p-6 xl:w-full xl:max-w-full xl:mx-0">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between px-6 pt-6">
              <div>
                <h2 className="text-[#FAFAFA] text-[32px] font-bold font-[Poppins] mb-2">
                  {getHeading()}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden xl:block">
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
        className="fixed left-0 w-full z-[9999] xl:hidden"
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
