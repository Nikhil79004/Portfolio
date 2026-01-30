import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-400 min-h-screen w-full md:w-[80%] mx-auto p-4 md:p-20 rounded-2xl text-black">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-serif underline tracking-wide">
          Nikhil Singh Mehra
        </h1>
        <h3 className="text-base md:text-lg mt-4 font-semibold">
          I'm a software engineer, product designer.
        </h3>
        <p className="text-base md:text-lg font-semibold">
          Well-versed with React, JavaScript, and modern web frameworks.
        </p>
      </div>

      <div className="text-base md:text-lg font-serif font-semibold flex gap-10 pt-6">
        <a
          className="underline hover:scale-110 transition-transform duration-300"
          href="https://github.com/Nikhil79004"
        >
          GitHub
        </a>
        <a
          className="underline hover:scale-110 transition-transform duration-300"
          href="mailto:mehranikhilsingh@gmail.com"
        >
          Email
        </a>
      </div>

      <div className="mt-6">
        <h1 className="font-bold text-xl md:text-2xl underline">
          Experience
        </h1>
        <p className="mt-4">
          Cloned multiple websites for self-improvement and skill enhancement.
        </p>
        <p>Started: Dec 2023</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold underline">
          Education
        </h2>
        <p className="mt-4">Uttarakhand Open University</p>
        <p>Bachelor of Arts (2025)</p>
      </div>

      <div className="mt-6">
        <h1 className="text-xl md:text-2xl font-bold underline">
          Skills
        </h1>
        <p className="mt-4">
          HTML, CSS, JavaScript, Tailwind CSS, React.js
        </p>
        <p>React Three Fiber, Three.js</p>
        <p>Git, GitHub</p>
      </div>
    </div>
  );
};

export default Resume;
