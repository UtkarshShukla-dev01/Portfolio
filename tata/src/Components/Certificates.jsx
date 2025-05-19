import React from 'react';

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
  // Add other certificates here as needed...
];

const CertificateCard = ({ certificate }) => (
  <div className="bg-[#282829] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-transform duration-300 certificate-card">
    <div className="certificate-info">
      <h3 className="text-lg md:text-2xl font-bold text-yellow-400 mb-1 md:mb-2 break-words">{certificate.title}</h3>
      <p className="text-gray-400 text-xs md:text-base break-words">{certificate.description}</p>
      <p className="text-gray-400 text-xs md:text-sm mt-1">
        <strong>Issuer:</strong> {certificate.issuer} | <strong>Date:</strong> {certificate.date}
      </p>
    </div>
    <div style={{ width: '100%', height: '60vh', maxHeight: 600, position: 'relative', marginTop: '1rem' }}>
      <iframe
        src={certificate.pdf}
        style={{ width: '100%', height: '100%', border: 'none', minHeight: '400px' }}
        title={`Certificate PDF - ${certificate.title}`}
      />
    </div>
    <p className="mt-2 text-sm text-center text-yellow-400">
      Can't view PDF?{' '}
      <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600">
        Open in new tab
      </a>
    </p>
  </div>
);

const Certificates = () => {
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
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
