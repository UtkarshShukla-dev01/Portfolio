import React from "react";

const navItems = [
  { key: "about", label: "About" },
  { key: "resume", label: "Resume" },
  { key: "projects", label: "Projects" },
  { key: "certificate", label: "Certificate" },
  { key: "contact", label: "Contact" },
];

export default function BottomNavigation({ currentSection, setCurrentSection }) {
  return (
    <nav className="flex justify-center items-center w-full space-x-6 py-3">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setCurrentSection(item.key)}
          className={`py-2 text-sm transition-colors cursor-pointer ${
            currentSection === item.key
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          <span className="block w-full text-center truncate overflow-hidden whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
