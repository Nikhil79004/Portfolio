import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="min-h-screen w-full p-16">
      <div>
        <h2 className="font-bold font-serif text-6xl ">Work.</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
        <Card img="./Golf.png" href="https://platform-cyan-five.vercel.app/" />
        <Card img="./Product.png" href="https://platform-3eg8.vercel.app/" />
        <Card img="./Three.png" href="https://based-indol.vercel.app/" />
        <Card img="./Zango.png" href="https://zanjo-mu.vercel.app/" />
      </div>
    </div>
  );
};

export default Projects;
