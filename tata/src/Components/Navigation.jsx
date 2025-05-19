import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <nav
      className="absolute top-0 right-0 shadow-md z-50"
      style={{
        backgroundColor: '#282829',
        width: 'max-content', // or a fixed width like '600px'
        overflow: 'hidden',
        borderTopRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '0',
        padding: '0 20px',
        boxShadow: 'none'
      }}
    >
      <ul className="flex items-center justify-between py-3">
        {['about', 'resume', 'projects', 'certificate', 'contact'].map((section) => (
          <li key={section} className="text-center">
            <button
              onClick={() => setCurrentSection(section)}
              className={`${
                currentSection === section
                  ? 'text-yellow-400 font-semibold'
                  : 'text-gray-400 hover:text-gray-300 font-semibold'
              } 
              text-base bg-transparent transition-colors duration-300`}
              style={{
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                padding: '6px 12px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;