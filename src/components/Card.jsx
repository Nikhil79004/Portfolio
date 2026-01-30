import React from "react";

const Card = ({ img, href }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Image */}
      <div className="mt-12 w-full max-w-[600px] aspect-[3/2] overflow-hidden rounded-3xl shadow-lg">
        <img
          src={img}
          alt="project"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Button */}
      <div className="pt-4 w-full max-w-[600px] flex justify-center">
        <a
          href={href}
          target="_blank"
          className="bg-blue-200 text-xl px-6 py-2 font-semibold rounded-3xl border-2 border-black hover:bg-blue-400 transition"
        >
          Click Here...!
        </a>
      </div>
    </div>
  );
};

export default Card;
