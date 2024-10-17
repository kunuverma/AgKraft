// "use client";

// import { useParams } from "next/navigation";
// import { Navitems } from "@/data/navbar";
// import WebDevelopment from "@/app/(pages)/companyservice/components/web-development";
// import OurTeam from "@/app/(pages)/companyservice/components/our-team";

// const ServiceDetail = () => {
//   const { serviceId } = useParams();
//   console.log(serviceId);

//   try {
//     if (!serviceId) {
//       return <div>Loading...</div>;
//     }

//     const companyservices = Navitems.flatMap(item => item.submenus || []).find(submenu => submenu.id === serviceId);

//     if (!companyservices) {
//       return <div>Service not found</div>;
//     }

//     return (
//       <div className="">
//         {companyservices.id === "1" && <WebDevelopment />}
//         {companyservices.id === "10" && <OurTeam />}
//       </div>
//     );
//   } catch (error) {
//     console.error(error);
//     return <div>An error occurred</div>;
//   }
// };

// export default ServiceDetail;

// pages/companyservice/[serviceId]/page.tsx (server component)

import { Navitems } from "@/data/navbar";
import WebDevelopment from "@/app/(pages)/companyservice/components/web-development";
import OurTeam from "@/app/(pages)/companyservice/components/our-team";

// This will generate static params for all service pages
export async function generateStaticParams() {
  // Flatten submenus to get all service IDs
  const serviceIds = Navitems.flatMap(item => item.submenus || []).map(submenu => submenu.id);

  return serviceIds.map(serviceId => ({
    serviceId, // Next.js expects this format
  }));
}

// The page component
export default function ServiceDetail({ params }: { params: { serviceId: string } }) {
  const { serviceId } = params; // Params come from static generation

  // Find the service by id
  const companyservices = Navitems.flatMap(item => item.submenus || []).find(submenu => submenu.id === serviceId);

  if (!companyservices) {
    return <div>Service not found</div>;
  }

  return (
    <div className="">
      {companyservices.id === "1" && <WebDevelopment />}
      {companyservices.id === "10" && <OurTeam />}
    </div>
  );
}

