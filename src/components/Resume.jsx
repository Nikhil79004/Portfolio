import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full md:w-[80%] mx-auto p-4 md:p-20 rounded-2xl text-black">

      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold font-serif underline border-b-2 pb-3">
        Nikhil Singh Mehra
      </h1>
      <p className="mt-3 text-base md:text-lg font-semibold">
        Frontend Developer | React.js Developer
      </p>
      <p className="text-base md:text-lg">
        Well-versed with React, JavaScript, and modern web frameworks.
      </p>

      {/* Contact */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-6 text-base md:text-lg">
        <a href="mailto:mehranikhilsingh@gmail.com" className="hover:underline">
          📧 mehranikhilsingh@gmail.com
        </a>
        <a
          href="https://github.com/Nikhil79004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🔗 github.com/Nikhil79004
        </a>
      </div>

      {/* Summary */}
      <section className="mt-6 border-t-2 pt-3">
        <h2 className="text-xl md:text-2xl font-bold underline">Summary</h2>
        <p className="mt-3">
          Motivated Frontend Developer skilled in React.js, JavaScript, and
          Tailwind CSS. Focused on building responsive, user-friendly
          applications with modern development practices.
        </p>
      </section>


      {/* Skills */}
      <section className="mt-6 border-t-2 pt-3">
        <h2 className="text-xl md:text-2xl font-bold underline">Technical Skills</h2>
        <p className="mt-3">
          <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS
        </p>
        <p className="mt-2">
          <strong>3D:</strong> React Three Fiber, Three.js
        </p>
        <p className="mt-2">
          <strong>Tools:</strong> Git, GitHub
        </p>
        <p className="mt-2">
          <strong>Concepts:</strong> Responsive Design, State Management, Component-Based Architecture
        </p>
      </section>

      {/* Education */}
      <section className="mt-6 border-t-2 pt-3">
        <h2 className="text-xl md:text-2xl font-bold underline">Education</h2>
        <p className="mt-3">Bachelor of Arts (2025) – Uttarakhand Open University</p>
      </section>

      {/* Experience */}
      <section className="border-b-2 pb-3">
        <h2 className="text-xl md:text-2xl font-bold underline mt-6 border-t-2 pt-3 ">Experience</h2>
        <ul className="mt-2 space-y-1">
          <li><strong>Frontend Developer (Self Projects)</strong></li>
          <li>Built and deployed responsive web applications.</li>
          <li>Improved UI consistency and performance using React best practices.</li>
          <li>Designed reusable and clean component structures.</li>
        </ul>
      </section>
      
    </div>
  );
};

export default Resume;
