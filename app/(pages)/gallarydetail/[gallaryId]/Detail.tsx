import { Projectdata } from "@/data/project";
import React from 'react';

interface DetailProps {
  ProjectdataId: string | number; // Allow number as well
}

export const Detail: React.FC<DetailProps> = ({ ProjectdataId }) => {
  // Convert ProjectdataId to string and trim it
  const currentProjectId = ProjectdataId.toString().trim();

  // Log to check the passed ProjectdataId
  console.log("Passed ProjectdataId:", currentProjectId);

  // Log all the available project IDs to verify
  const availableIds = Projectdata.map(project => project.id.toString());
  console.log("Available Project IDs:", availableIds);

  // Find the specific project data based on id
  const slideDetail = Projectdata.find((project) => {
    const projectId = project.id.toString().trim();
    console.log(`Comparing project ID: ${projectId} with ProjectdataId: ${currentProjectId}`);
    return projectId === currentProjectId;
  });

  // Handle case where slideDetail might be undefined
  if (!slideDetail) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mt-10 px-14">
      <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
        <div className="lg:my-24 mt-5 flex lg:w-[50%] flex-col gap-10">
          {/* Title */}
          <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
            {slideDetail.title}
          </h1>

          {/* Description 1 */}
          <p className="text-base font-medium text-gray-300 lg:w-[95%]">
            {slideDetail.description1}
          </p>

          {/* Description 2 */}
          <p className="text-base font-medium text-gray-300 lg:w-[95%]">
            {slideDetail.description2}
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={slideDetail.image.src}
            alt={slideDetail.title}
            className="shadow-[0px_0px_20px_3px_#a0aec0] rounded-xl lg:w-[40rem] w-[40]"/>
        </div>
      </div>
    </div>
  );
};
