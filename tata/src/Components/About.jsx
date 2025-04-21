import React from 'react'; 

const About = () => { 

  const skills = [ 

    { 

      title: "Full-Stack Web Development", 

      icon: "💻", 

      description: "Building responsive PERN stack web apps with real-world project and internship experience." 

    }, 

    { 

      title: "Intern @ Triveni Infosoft", 

      icon: "💼", 

      description: "Creating test frameworks and responsive UIs using HTML, CSS, JS, Python & Bootstrap in a real-world dev environment." 

    }, 

    { 

      title: "React Development", 

      icon: "⚛️", 

      description: "Developing dynamic UIs with React.js using hooks, state management, and API integration." 

    }, 

    { 

      title: "Frontend UI Development", 

      icon: "👨🏻‍💻", 

      description: "Crafting clean, accessible UIs with HTML, CSS, Bootstrap, and Tailwind CSS." 

    }, 

    // { 

    //   title: "Version Control & Team Collaboration", 

    //   icon: "👨‍💻", 

    //   description: "Collaborating with Git & GitHub through branches, pull requests, and team contributions." 

    // }, 

  ]; 

  const softSkills = [ 

    { 

      title: "Fast Learner", 

      icon: "⚡", 

      description: "I have the ability to quickly acquire new knowledge and adapt to changing technologies." 

    }, 

    { 

      title: "Teamwork", 

      icon: "👨🏻‍👩🏻", 

      description: "I collaborate effectively in multidisciplinary projects and communicate clearly with team members." 

    }, 

    { 

      title: "Problem Solving", 

      icon: "🕵", 

      description: "I am creative and efficient in identifying and solving technical problems." 

    }, 

    { 

      title: "Effective Communication", 

      icon: "💬", 

      description: "I have the skill to convey ideas clearly and concisely, both technically and non-technically." 

    } 

  ]; 

  const techStack = [ 

    { name: "HTML5", icon: <img src="https://www.svgrepo.com/show/197982/html.svg" alt="HTML5" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "React", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "DOM", icon: <img src="https://ourcodeworld.com/public-media/articles/articleocw-56bba37e791bc.png" alt="JavaScript" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "Node.js", icon: <img src="https://cdn-icons-png.freepik.com/512/15379/15379746.png" alt="Node.js" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "Express", icon: <img src="https://img.icons8.com/nolan/512/express-js.png" alt="Express" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "PostgreSQL", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" className="w-12 h-12 transition-transform transform hover:scale-115" />, textClass: "text-sm" }, 

    { name: "SQL", icon: <img src="https://cdn-icons-png.freepik.com/512/9544/9544010.png" alt="SQL" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "C++", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "GitHub", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="GitHub" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "APIs", icon: <img src="https://cdn-icons-png.flaticon.com/512/627/627558.png" alt="APIs" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "CSS3", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "JavaScript", icon: <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp" alt="JavaScript" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

    { name: "Bootstrap", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-12 h-12 transition-transform transform hover:scale-115" /> }, 

  ]; 

  return ( 

    <div className="p-8 min-h-screen"> 

      <div className="mb-12"> 

        <p className="text-gray-300 leading-relaxed"> 

          I'm Utkarsh Shukla, A Freelance Web Developer And Computer Science Student. With 2 Years Of Experience In Web Development, I Specialize In Creating Clean, Responsive, And Dynamic Websites & Web Applications Using PERN Stack. 

          Currently Pursuing My B.Tech In Computer Science, I'm Open To Full-Time Roles And Freelance Opportunities. I'm Naturally Curious, Quietly Confident, And Always Pushing My Limits Every Day To Become A Better Developer. 

        </p> 

        <p className="text-gray-300 leading-relaxed mt-4"> 

          My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. 

        </p> 

      </div> 

      <h2 className="text-3xl font-bold text-white mb-6">What I'm Doing</h2> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> 

        {skills.map((skill, index) => ( 

          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex items-start gap-4"> 

            <span className="text-4xl text-yellow-400 bg-[#2a2a2a] p-2 rounded-full">{skill.icon}</span> 

            <div> 

              <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3> 

              <p className="text-gray-400">{skill.description}</p> 

            </div> 

          </div> 

        ))} 

      </div> 

      <h2 className="text-3xl font-bold text-white mb-6">Tech Experience</h2> 

      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-12"> 

        {techStack.map((tech, index) => ( 

          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center gap-4"> 

            {tech.icon} 

            <h3 className={`text-xl font-bold text-white ${tech.textClass || ''}`}>{tech.name}</h3> 

          </div> 

        ))} 

      </div> 

      <h2 className="text-3xl font-bold text-white mb-6">Soft Skills</h2> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> 

        {softSkills.map((skill, index) => ( 

          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex items-start gap-4"> 

            <span className="text-4xl text-yellow-400 bg-[#2a2a2a] p-2 rounded-full">{skill.icon}</span> 

            <div> 

              <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3> 

              <p className="text-gray-400">{skill.description}</p> 

            </div> 

          </div> 

        ))} 

      </div> 

    </div> 

  ); 

}; 

export default About; 