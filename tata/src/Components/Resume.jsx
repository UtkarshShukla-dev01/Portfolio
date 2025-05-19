import React, { useState } from 'react';

const Resume = () => {
  const [loading, setLoading] = useState(true);

  // Hamster loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-[#1E1E1F] bg-opacity-80 z-10">
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

  return (
    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg relative">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        <img
          src="https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-filled-outline/512/interview_business_job_offer_manager_employment_resume_contract_employee-128.png"
          alt="Resume Icon"
          className="mx-auto w-16 h-16"
        />
      </h2>

      <div className="w-full max-w-[980px] mx-auto h-auto overflow-hidden rounded-lg shadow-md border border-gray-700 relative group cursor-pointer">
        {loading && <Loader />}
        <a
          href="/Utkarsh_Shukla_resume_3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Utkarsh_Shukla_resume_3.png"
            alt="Utkarsh Shukla Resume"
            className="w-full h-auto object-contain rounded-lg"
            onLoad={() => setLoading(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-md rounded-lg">
            <button
              type="button"
              className="flex items-center gap-2 px-7 py-3 bg-white/80 text-black font-bold rounded-full shadow-lg border-2 border-yellow-600/30 hover:bg-white/90 hover:text-yellow-500 hover:scale-105 hover:shadow-yellow-700/20 transition-all duration-300 backdrop-blur-lg ring-2 ring-yellow-900/10"
              style={{
                boxShadow: "0 4px 18px 0 rgba(255, 221, 51, 0.07), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
                fontSize: "1.15rem",
                letterSpacing: "0.03em",
              }}
              tabIndex={-1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" />
              </svg>
              View PDF
            </button>
          </div>
        </a>
      </div>

      <div className="mt-6 text-center">
        <a
          href="/Utkarsh_Shukla_resume_3.pdf"
          download
          className="text-yellow-400 hover:text-yellow-500 font-semibold inline-flex items-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
