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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg text-yellow-400 font-semibold text-lg">
            View Resume PDF
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
