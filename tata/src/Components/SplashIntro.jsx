import React, { useEffect, useState } from "react";
import capybaraGif from "../assets/capybara.gif";

const SplashIntro = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1E1E1F] transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <img
        src={capybaraGif}
        alt="Capybara Gort Animation"
        className="w-40 h-40 object-contain"
        draggable="false"
      />
      <h1 className="mt-6 text-5xl font-extrabold text-yellow-400 drop-shadow-lg text-center">
        There&apos;s a new web dev in town!
      </h1>
      <p className="mt-4 text-2xl text-gray-300 text-center font-medium">
        Welcome to my portfolio
      </p>
    </div>
  );
};

export default SplashIntro;