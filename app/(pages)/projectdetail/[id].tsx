import { Projectdata } from "@/data/project";
import { useParams } from "next/navigation"; // Use the correct hook for getting parameters

const ProjectDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  if (!id) {
    return <div>Loading...</div>; // Wait for the router to resolve
  }

  // Find the project based on the id from the URL
  const project = Projectdata.find((project) => project.id === parseInt(id as string));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#191A1E] text-white p-10">
      <h1 className="text-4xl font-bold mb-5">{project.title}</h1>
      <img src={project.image.src} alt={project.title} className="w-full h-[30rem] object-cover mb-5" />
      <p className="text-lg">{project.description}</p>
      <div className="mt-4">
        <span className="text-gray-300">Tech: {project.tech}</span><br />
        <span className="text-gray-300">Design: {project.design}</span>
      </div>
    </div>
  );
};

export default ProjectDetail;
