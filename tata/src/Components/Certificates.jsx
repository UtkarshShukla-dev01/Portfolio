import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: "FRONTEND DEVELOPER (REACT)",
      issuer: "HackerRank",
      date: "April 16, 2025",
      description: "Passed the HackerRank role certification test for Frontend Developer (React).",
      image: "/certificates2/frontend_developer_react_certificate.png",
    },
    {
      title: "CYBERSECURITY FOR EVERYONE",
      issuer: "UNIVERSITY OF MARYLAND",
      date: "Dec 7, 2023",
      description: "Completed certification on cybersecurity fundamentals by the University of Maryland.",
      image: "/certificates2/Cybersecurity_for_Everyone.png",
    },
    {
      title: "HTML,CSS, AND JAVASCRIPT FOR WEB DEVELOPERS",
      issuer: "Coursera",
      date: "MAY 4, 2023",
      description: "Completed certification on HTML, CSS, and JavaScript fundamentals.",
      image: "/certificates2/HTML, CSS, and Javascript for Web Developers.png",
    },
    {
      title: "MACHINE LEARNING- REGRESSION",
      issuer: "Coursera",
      date: "Dec 6, 2023",
      description: "Completed certification on regression techniques in machine learning.",
      image: "/certificates2/Machine Learning- Regression.png",
    },
    {
      title: "CYBER SECURITY FUNDAMENTALS",
      issuer: "Coursera",
      date: "MAY 15, 2024",
      description: "Completed certification on core concepts of cyber security from coursera.",
      image: "/certificates2/Cyber Security Fundamentals.png",
    },
    {
      title: "GOOGLE DATA ANALYTICS CAPSTONE- COMPLETE A CASE STUDY",
      issuer: "Coursera",
      date: "MAY 15, 2024",
      description: "Completed a data analytics case study as part of the Google Capstone.",
      image: "/certificates2/Google Data Analytics Capstone- Complete a Case Study.png",
    },
    {
      title: "ANALYZE DATA TO ANSWER QUESTIONS",
      issuer: "GOOGLE",
      date: "MAY 15, 2024",
      description: "Used data analysis techniques to draw insights and answer business questions.",
      image: "/certificates2/Analyze Data to Answer Questions.png",
    },
    {
      title: "LINUX FOR DEVELOPERS",
      issuer: "THE LINUX FOUNDATION",
      date: "NOV 20, 2022",
      description: "Completed certification on essential Linux tools and commands for developers.",
      image: "/certificates2/Linux for Developers.png",
    },
    {
      title: "SOFTWARE DESIGN AND PROJECT MANAGEMENT",
      issuer: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      date: "MAY 20, 2022",
      description: "Completed Software Design and Project Management from HONG KONG UNIV.",
      image: "/certificates2/Software Engineering- Software Design and Project Management.png",
    },
    {
      title: "PROJECT PLANNING- PUTTING IT ALL TOGETHER",
      issuer: "GOOGLE",
      date: "MAY 15, 2024",
      description: "Mastered project planning strategies to drive successful outcomes.",
      image: "/certificates2/Project Planning- Putting It All Together.png",
    },
    {
      title: "THE BITS AND BYTES OF COMPUTER NETWORKING",
      issuer: "GOOGLE",
      date: "APR 17, 2023",
      description: "Gained expertise in computer networking fundamentals through the Bits and Bytes.",
      image: "/certificates2/The Bits and Bytes of Computer Networking.png",
    },
    {
      title: "PROCESS DATA FROM DIRTY TO CLEAN",
      issuer: "GOOGLE",
      date: "MAY 15, 2024",
      description: "Cleaned and processed data for insights in the Process Data from Dirty to Clean.",
      image: "/certificates2/Process Data from Dirty to Clean.png",
    },
  ];

  return (
    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/certificate-illustration-download-in-svg-png-gif-file-formats--cup-crown-scholar-reward-achievement-pack-sports-games-illustrations-2804238.png?f=webp"
          alt="Certificate Icon"
          className="mx-auto w-34 h-40"
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => {
          const pdfPath = `/certificates/${certificate.image.split("/").pop().replace(".png", ".pdf")}`;
          return (
            <div
              key={index}
              className="bg-[#282829] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-transform duration-300"
            >
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-yellow-400 mb-1 md:mb-2 max-sm:break-words">
                  {certificate.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-base max-sm:break-words">{certificate.description}</p>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  <strong>Issuer:</strong> {certificate.issuer} | <strong>Date:</strong> {certificate.date}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view PDF"
                >
                  <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Click to view PDF
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
