// components/FilterPage.js
"use client";

import { useState } from "react";
import { Projectdata } from "@/data/project"; // Adjust the import path as needed
import Image from "next/image";

const techOptions = [
  "All",
  "React",
  "Next.js",
  "Java",
  "JavaScript",
  "C++",
  // Add more options as needed
];

const designOptions = [
  "All",
  "E-commerce",
  "Portfolio",
  "Blog",
  "Social Media",
  "Ed-tech",
  "Fitness",
  "Productivity",
  // Add more options as needed
];

const FilterPage = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState("All");

  const handleTechChange = (e: any) => {
    setSelectedTech(e.target.value);
  };

  const handleDesignChange = (e: any) => {
    setSelectedDesign(e.target.value);
  };

  const filteredProjects = Projectdata.filter((project) => {
    const techMatch = selectedTech === "All" || project.tech === selectedTech;
    const designMatch =
      selectedDesign === "All" || project.design === selectedDesign;

    return techMatch && designMatch;
  });

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Choose Your Favourite Project</h1>

      <div className="flex mb-4">
        <select
          value={selectedTech}
          onChange={handleTechChange}
          className="p-2 border rounded mr-2"
        >
          {techOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={selectedDesign}
          onChange={handleDesignChange}
          className="p-2 border rounded"
        >
          {designOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSelectedTech("All");
            setSelectedDesign("All");
          }}
          className="ml-4 p-2 bg-gray-600 text-white rounded"
        >
          Show All
        </button>
      </div>

      <div className="flex flex-wrap justify-center ">
        {filteredProjects.map((data) => (
          <div
            key={data.id}
            className="bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 flex flex-col items-center"
            style={{ width: "300px" }}
          >
            <h2 className="text-xl font-bold text-neutral-600 dark:text-white text-center">
              {data.title}
            </h2>
            <p className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 text-center">
              {data.description1}
            </p>
            <Image
              src={data.image}
              height="200"
              width="300"
              className="mt-4 rounded-xl object-cover"
              alt={data.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
