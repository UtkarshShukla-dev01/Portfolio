import React, { useState } from 'react';

const Resume = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg relative">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        <img
          src="https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-filled-outline/512/interview_business_job_offer_manager_employment_resume_contract_employee-128.png"
          alt="Resume Icon"
          className="mx-auto w-16 h-16"
        />
      </h2>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#1E1E1F] bg-opacity-80 rounded-3xl">
          <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full max-w-[980px] mx-auto h-auto overflow-hidden rounded-lg shadow-md border border-gray-700 relative group cursor-pointer">
        <a
          href="/Utkarsh_Shukla_resume_3.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Utkarsh_Shukla_resume_3.png"
            alt="Utkarsh Shukla Resume"
            onLoad={() => setLoading(false)}
            className="w-full h-auto object-contain rounded-lg"
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
