 

 

import React, { useState } from 'react'; 

const Projects = () => { 

  const projects = [ 

    { 

      title: "Simon Game", 

      description: "A memory game that tests your ability to repeat light and sound patterns.", 

      github: "https://github.com/UtkarshShukla-dev01/Simon-Game", 

      live: "https://simon-game-sigma-plum.vercel.app", 

    }, 

    { 

      title: "Drum Kit", 

      description: "Hit the keys, hear the beats!", 

      github: "https://github.com/UtkarshShukla-dev01/Drum-kit", 

      live: "https://drum-kit-tau-eight.vercel.app/", 

    }, 

    { 

      title: "SentenceBuilder", 

      description: "A tool to help construct sentences effectively.", 

      github: "https://github.com/UtkarshShukla-dev01/Sentence", 

      live: "https://sentencebuilder.vercel.app/", 

    }, 

    { 

      title: "Family Travel Tracker", 

      description: "A tool to track and display the countries each family member has visited.", 

      github: "https://github.com/UtkarshShukla-dev01/Family-Travel-Tracker", 

      image: "/projects/family-travel-tracker.png", 

    }, 

    { 

      title: "Crypto Tracker", 

      description: "A tool that fetches real-time crypto data, displaying price trends, rises, lows, and top trending cryptocurrencies.", 

      github: "https://github.com/UtkarshShukla-dev01/Crypto-Price-Tracker-", 

      image: "/projects/crypto-price-tracker.png", 

    }, 

    { 

      title: "Response Code", 

      description: "Get all HTTP response codes from typing query", 

      github: "https://github.com/UtkarshShukla-dev01/Response-Codes", 

      image: "/projects/Response.png", 

    }, 

    { 

      title: "To-Do List", 

      description: "A simple task manager to organize and track your to-dos.", 

      github: "https://github.com/UtkarshShukla-dev01/To-Do-", 

      image: "/projects/To-do-list.png", 

    }, 

    { 

      title: "Blog Website", 

      description: "A platform to write, publish, and share blog posts.", 

      github: "https://github.com/UtkarshShukla-dev01/BLOG-Website-2", 

      image: "/projects/Blogs.png", 

    }, 

  ]; 

  // Track loading state for each live iframe
  const [loadingStates, setLoadingStates] = useState(
    projects.map(project => !!project.live)
  );

  // Hamster loader markup
  const Loader = () => (
    <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-[#282829] bg-opacity-80 z-10">
      <div className="wheel-and-hamster" aria-label="Hamster running in a wheel">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );

  const handleIframeLoad = (idx) => {
    setLoadingStates(prev => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  return ( 

    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg"> 

      <h2 className="text-4xl font-bold text-white mb-6 text-center"> 

        <img 

          src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" 

          alt="Resume Icon" 

          className="mx-auto w-16 h-16" 

        /> 

      </h2> 

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8"> 

        {projects.map((project, index) => ( 

          <div 

            key={index} 

            className="bg-[#282829] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-transform duration-300" 

          > 

            <div className="mb-4 overflow-hidden h-[250px] relative rounded-md border border-gray-700"> 

              {project.live ? ( 

                <div 

                  style={{ 

                    transform: 'scale(0.35)', 

                    transformOrigin: 'top left', 

                    width: '285%', 

                    height: '285%', 

                  }} 

                  className="relative w-full h-full"
                >
                  {loadingStates[index] && <Loader />}
                  <iframe 

                    src={project.live} 

                    title={project.title} 

                    style={{ 

                      width: '100%', 

                      height: '100%', 

                      border: 'none', 

                      opacity: loadingStates[index] ? 0 : 1,
                      transition: 'opacity 0.7s',
                      zIndex: 20,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    onLoad={() => handleIframeLoad(index)}
                  ></iframe>
                </div>
              ) : ( 

                <img 

                  src={project.image} 

                  alt={project.title} 

                  className="w-full h-full object-cover" 

                /> 

              )} 

            </div> 

            <div> 

              <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 max-sm:break-all">{project.title}</h3>
              <p className="text-gray-400 text-xs md:text-base max-sm:break-all">{project.description}</p>

            </div> 

            <div className="mt-4 flex justify-between"> 

              <a 

                href={project.github} 

                target="_blank" 

                rel="noopener noreferrer" 

                className="flex items-center" 

              > 

                <img 

                  src="https://img.icons8.com/?size=160&id=BfmLaUCOh7CM&format=png" 

                  alt="GitHub Icon" 

                  className="w-12 h-12 mr-2 hover:scale-110 transition-transform duration-200" 

                /> 

              </a> 

              {project.live && ( 

                <a 

                  href={project.live} 

                  target="_blank" 

                  rel="noopener noreferrer" 

                  className="flex items-center" 

                > 

                  <img 

                    src="https://img.icons8.com/?size=100&id=tjuIMOXXe1mT&format=png" 

                    alt="Live Demo Icon" 

                    className="w-9 h-9 mr-2 hover:scale-110 transition-transform duration-200" 

                  /> 

                </a> 

              )} 

            </div> 

          </div> 

        ))} 

      </div> 

    </div> 

  ); 

}; 

export default Projects;