"use client";

import { useParams } from "next/navigation";
import { Navitems } from "@/data/navbar";
import WebDevelopment from "../components/web-development";
import OurTeam from "../components/our-team";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log(serviceId);

  try {
    if (!serviceId) {
      return <div>Loading...</div>;
    }

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
  } catch (error) {
    console.error(error);
    return <div>An error occurred</div>;
  }
};

export default ServiceDetail;
