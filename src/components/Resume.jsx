import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-400 h-full w-[80%] justify-center items-center p-20 rounded-2xl m-36 text-black">
      <div>
        <h1 className="text-3xl font-bold font-serif underline tracking-wide">
          Nikhil singh mehra
        </h1>
        <h3 className="text-lg mt-4 font-semibold">
          I'm a software engineer, product designer.
        </h3>
        <p className="text-lg font-semibold">
          Well-versed with React, Javascript, and most of the Web frameworks.
        </p>
      </div>

      <div className="text-lg font-serif font-semibold flex gap-20 pt-10 ">
        <a
          className="underline rounded-xl hover:scale-110 transition-transform duration-300 "
          href="https://github.com/Nikhil79004"
        >
          Github
        </a>
        <a
          className="underline rounded-xl hover:scale-110 transition-transform duration-300"
          href="mailto:mehranikhilsingh@gmail.com"
        >
          Email
        </a>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-2xl underline tracking-wide">
          Experience:-
        </h1>
      </div>
      <div className="mt-4 font-semibold text-lg">
        <p className="text-lg">
          Cloned many websites of different companies, for self improvement and
          enhance self-skills.
        </p>
        <h3 className="text-lg">Started at 2023 Dec.</h3>
      </div>
      <div className="font-semibold text-lg">
        <h2 className="text-2xl mt-4 font-bold underline tracking-wide">
          Education
        </h2>
        <h3 className="mt-4">University -- Uttarakhand Open University</h3>
        <p>Graduation in Bachlor of Arts at 2025</p>
      </div>
      <div className="mt-4 text-lg font-semibold">
        <h1 className="text-2xl mt-4 font-bold underline tracking-wide">
          Skills:
        </h1>
        <p className="mt-4">
          Frontend Technologies: HTML, CSS, JavaScript, Tailwind CSS, React.js
        </p>
        <p>3D Development: React Three Fiber, Three.js</p>
        <p> Version Control: Git, GitHub</p>
      </div>
    </div>
  );
};

export default Resume;
