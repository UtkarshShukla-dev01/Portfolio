import React, { useState, useEffect } from 'react'; 

const Sidebar = () => { 
  const [showContacts, setShowContacts] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return ( 
    <div
      className="
        bg-[#1E1E1F]
        w-[550px]
        mx-auto
        mt-8
        rounded-3xl
        shadow-2xl
        p-9
        flex flex-col
        z-50
        relative
        md:w-[320px] md:fixed md:left-8 md:top-8 md:rounded-[24px] md:mx-0 md:mt-0 md:max-w-none md:p-5
      "
    > 
<button  
  className="absolute top-0 right-0
             px-2 py-1
             text-yellow-200
             font-bold
             text-xs
             rounded-tr-3xl
             rounded-bl-2xl
             border-l border-b border-white/10
             bg-[#1E1E1F]
             z-10
             md:hidden
             transition
             cursor-pointer
             hover:bg-[#2A2A2A]
             hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
  onClick={() => setShowContacts(!showContacts)} 
> 
  {showContacts ? "Hide Contacts" : "Show Contacts"} 
</button>




      {/* Header Section */} 
      <div className="flex items-center md:flex-col w-full"> 
        <div className="w-16 h-16 md:w-32 md:h-32 bg-[#2a2a2a] rounded-full md:rounded-[25px] overflow-hidden"> 
          <img  
            src="/memoji-dev.png"  
            alt="Profile"  
            className="w-full h-full object-cover" 
          /> 
        </div> 
        <div className="ml-4 md:ml-0 mt-0 md:mt-4 flex-1"> 
          <h1 className="text-[20px] md:text-[42px] font-bold text-white tracking-tight leading-none"> 
            Utkarsh{" "}<br className="hidden md:block" />Shukla 
          </h1> 
          <div className="bg-[#2a2a2a] text-gray-300 text-sm md:text-base mt-2 md:mt-3 px-3 py-1 rounded-lg inline-block"> 
            Full Stack Developer 
          </div> 
        </div> 
      </div> 

      {/* Contacts Section and Socials - only show on mobile if toggled, always show on md+ */}
      {(showContacts || isDesktop) && (
        <>
          <div className="block md:block w-full">
            <div className="mt-6 md:mt-8">
              <div className="w-full h-[1px] bg-white/20 mb-6"></div>
              <div className="space-y-6">
                {/* Email Section */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#2a2a2a] p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-400 text-xs">EMAIL</span>
                    <p className="text-white text-[15px]" style={{ margin: '0' }}>Utkarshshukla.cse@gmail.com</p>
                  </div>
                </div>
                {/* Birthday Section */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#2a2a2a] p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 2v2m8-2v2M3 9h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-400 text-xs">BIRTHDAY</span>
                    <p className="text-white text-[15px]" style={{ margin: '0' }}>March 20, 2003</p>
                  </div>
                </div>
                {/* Phone Number Section */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#2a2a2a] p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.11 19.42 19.42 0 01-6-6A19.86 19.86 0 013.11 4.18 2 2 0 015.11 2h3a2 2 0 012 1.72 12.66 12.66 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.66 12.66 0 002.81.7 2 2 0 011.72 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-400 text-xs">PHONE</span>
                    <p className="text-white text-[15px]" style={{ margin: '0' }}>+91 8765191045</p>
                  </div>
                </div>
                {/* Location Section */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#2a2a2a] p-2 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-400 text-xs">LOCATION</span>
                    <p className="text-white text-[15px]" style={{ margin: '0' }}>Noida, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          
          <div className="flex justify-center gap-4 mt-8">
 <a  

          href="https://www.instagram.com/Utkarsh._.009"  

          className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#333333]"  

          target="_blank"  

          rel="noopener noreferrer" 

        > 

          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"> 

            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> 

          </svg> 

        </a> 
         <a  

          href="https://www.linkedin.com/in/utkarsh-shukla-b33bb323b/"  

          className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#333333]"  

          target="_blank"  

          rel="noopener noreferrer" 

        > 

          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"> 

            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/> 

          </svg> 

        </a> 
         <a  

          href="https://leetcode.com/u/Utkarsh_Shukla20032003/"  

          className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#333333]"  

          target="_blank"  

          rel="noopener noreferrer" 

        > 

          <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" alt="LeetCode Icon" width="18" height="18" className="text-white" /> 

        </a> 
         <a  

          href="https://github.com/UtkarshShukla-dev01"  

          className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#333333]"  

          target="_blank"  

          rel="noopener noreferrer" 

        > 

          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"> 

            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.087 2.91.831.091-.646.349-1.086.635-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/> 

          </svg> 

        </a> 
        <a  

          href="https://wa.me/918765191045"  

          className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#333333]"  

          target="_blank"  

          rel="noopener noreferrer" 

        > 

          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"> 

            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/> 

          </svg> 

        </a> 


          </div>
        </>
      )}
    </div>
  ); 
};

export default Sidebar;
