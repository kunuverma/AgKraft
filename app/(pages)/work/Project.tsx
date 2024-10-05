import React, { useState } from "react";
import { Projectdata } from "@/data/project";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

// TypeScript interface for project data
interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  tech: string;
  design: string;
  height: string;
  lightColor?: string; // Optional light color for hover
}

export const ThreeDCardDemo: React.FC = () => {
  // State to track the hover effect for each card individually
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }[]>(Projectdata.map(() => ({ x: 0, y: 0 })));
  const [hovering, setHovering] = useState<boolean[]>(Projectdata.map(() => false));

  // Function to track mouse position for a specific card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    // Update the hover position for the specific card
    setHoverPosition((prevState) =>
      prevState.map((pos, idx) => (idx === index ? { x, y } : pos))
    );
  };

  // Mouse enter and leave handlers to toggle the light effect
  const handleMouseEnter = (index: number) => {
    setHovering((prevState) =>
      prevState.map((hover, idx) => (idx === index ? true : hover))
    );
  };

  const handleMouseLeave = (index: number) => {
    setHovering((prevState) =>
      prevState.map((hover, idx) => (idx === index ? false : hover))
    );
  };

  return (
    <div className="bg-[#191A1E] min-h-screen py-10 px-5">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-white font-bold bg-clip-text leading-none tracking-tighter whitespace-pre-wrap mt-2 mb-5">Our Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projectdata.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden bg-[#1E2025] shadow-lg ${project.height} group cursor-pointer`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Light Effect following the mouse */}
            <div
              className={`absolute w-60 h-60 bg-gradient-to-r rounded-full blur-lg pointer-events-none transition-opacity duration-300 ease-out transform 
              ${hovering[index] ? 'opacity-50' : 'opacity-0'}`}
              style={{
                background: project.lightColor
                  ? project.lightColor
                  : 'radial-gradient(circle, white 0%, gray 100%)', // Default white and gray if no color
                transform: `translate(${hoverPosition[index].x - 80}px, ${hoverPosition[index].y - 80}px)`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-4">
              <Link href={`/gallarydetail/[id]`}
                as={`/gallarydetail/${project.id}`}
                passHref>
                <Image
                  src={project.image.src}
                  alt={project.title} // Ensure this is descriptive
                  className="w-full h-[20rem] mt-3 object-cover"
                  width={project.image.width}
                  height={project.image.height}
                />
                <h3 className="text-white text-xl font-semibold mt-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-300">{project.tech}</span>
                  <span className="text-sm text-gray-300">{project.design}</span>
                  <Link href={""}>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                      Select project
                    </button>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
