import React, { useState } from 'react';

const Certificates = () => {
  const certificates = [
  {
  title: "FRONTEND DEVELOPER (REACT)",
  issuer: "HackerRank",
  date: "April 16, 2025",
  description: "Passed the HackerRank role certification test for Frontend Developer (React).",
  pdf: "/certificates/frontend_developer_react_certificate.pdf",
},
 {
  title: "CYBERSECURITY FOR EVERYONE",
  issuer: "UNIVERSITY OF MARYLAND",
  date: "Dec 7, 2023",
  description: "Completed certification on cybersecurity fundamentals by the University of Maryland.",
  pdf: "/certificates/Cybersecurity_for_Everyone.pdf",
},
 {
  title: "HTML,CSS, AND JAVASCRIPT FOR WEB DEVELOPERS",
  issuer: "Coursera",
  date: "MAY 4, 2023",
  description: "Completed certification on HTML, CSS, and JavaScript fundamentals.",
  pdf: "/certificates/HTML, CSS, and Javascript for Web Developers.pdf",
},
 {
  title: "MACHINE LEARNING- REGRESSION",
  issuer: "Coursera",
  date: "Dec 6, 2023",
  description: "Completed certification on regression techniques in machine learning.",
  pdf: "/certificates/Machine Learning- Regression.pdf",
},
 {
  title: "CYBER SECURITY FUNDAMENTALS",
  issuer: "Coursera",
  date: "MAY 15, 2024",
  description: "Completed certification on core concepts of cyber security from coursera.",
  pdf: "/certificates/Cyber Security Fundamentals.pdf",
},
 {
  title: "GOOGLE DATA ANALYTICS CAPSTONE- COMPLETE A CASE STUDY",
  issuer: "Coursera",
  date: "MAY 15, 2024",
  description: "Completed a data analytics case study as part of the Google Capstone.",
  pdf: "/certificates/Google Data Analytics Capstone- Complete a Case Study.pdf",
},
 {
  title: "ANALYZE DATA TO ANSWER QUESTIONS",
  issuer: "GOOGLE",
  date: "MAY 15, 2024",
  description: "Used data analysis techniques to draw insights and answer business questions.",
  pdf: "/certificates/Analyze Data to Answer Questions.pdf",
},
 {
  title: "LINUX FOR DEVELOPERS",
  issuer: "THE LINUX FOUNDATION",
  date: "NOV 20, 2022",
  description: "Completed certification on essential Linux tools and commands for developers.",
  pdf: "/certificates/Linux for Developers.pdf",
},
 {
  title: "SOFTWARE DESIGN AND PROJECT MANAGEMENT",
  issuer: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
  date: "MAY 20, 2022",
  description: "Completed Software Design and Project Management from HONG KONG UNIV.",
  pdf: "/certificates/Software Engineering- Software Design and Project Management.pdf",
},
 {
  title: "PROJECT PLANNING- PUTTING IT ALL TOGETHER",
  issuer: "GOOGLE",
  date: "MAY 15, 2024",
  description: "Mastered project planning strategies to drive successful outcomes.",
  pdf: "/certificates/Project Planning- Putting It All Together.pdf",
},
 {
  title: "THE BITS AND BYTES OF COMPUTER NETWORKING",
  issuer: "GOOGLE",
  date: "APR 17, 2023",
  description: "Gained expertise in computer networking fundamentals through the Bits and Bytes.",
  pdf: "/certificates/The Bits and Bytes of Computer Networking.pdf",
},
 {
  title: "PROCESS DATA FROM DIRTY TO CLEAN",
  issuer: "GOOGLE",
  date: "MAY 15, 2024",
  description: "Cleaned and processed data for insights in the Process Data from Dirty to Clean.",
  pdf: "/certificates/Process Data from Dirty to Clean.pdf",
},
    // Add more certificates as needed
  ];

  // Track loading state for each iframe
  const [loadingStates, setLoadingStates] = useState(
    Array(certificates.length).fill(true)
  );

  // Loader markup
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
    setLoadingStates((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  return (
    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/certificate-illustration-download-in-svg-png-gif-file-formats--cup-crown-scholar-reward-achievement-pack-sports-games-illustrations-2804238.png?f=webp"
          alt="Certificate Icon"
          className="mx-auto w-34 h-40"
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-[#282829] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-transform duration-300 certificate-card"
          >
            <div className="certificate-info">
              <h3 className="text-2xl text-yellow text-bold mb-2">{certificate.title}</h3>
              <p className="text-gray mb-1">
                Issued by: <span className="font-medium">{certificate.issuer}</span>
              </p>
              <p className="text-gray mb-4">
                Date: <span className="font-medium">{certificate.date}</span>
              </p>
              <p className="text-gray mb-4">{certificate.description}</p>
            </div>
            <div className="mt-4">
              <div className="relative w-full h-48">
                {loadingStates[index] && <Loader />}
                <iframe
                  src={certificate.pdf}
                  title={certificate.title}
                  className={`w-full h-full rounded-md border-none absolute top-0 left-0 transition-opacity duration-700`}
                  frameBorder="0"
                  onLoad={() => handleIframeLoad(index)}
                  style={{
                    zIndex: 20,
                    opacity: loadingStates[index] ? 0 : 1,
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
