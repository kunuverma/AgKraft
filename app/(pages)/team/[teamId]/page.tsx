

"use client";

import { useParams } from "next/navigation";
import { Navitems } from "@/data/navbar";
import Ourteam from "../components/ourteam";

const Teamus = () => {
  const { teamId } = useParams();
  console.log(teamId);

  try {
    if (!teamId) {
      return <div>Loading...</div>;
    }

    const teamservices = Navitems.flatMap(item => item.submenus || []).find(submenu => submenu.id === teamId);

    if (!teamservices) {
      return <div>Service not found</div>;
    }

    return (
      <div className="">
        {teamservices.id === "10" && <Ourteam />}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>An error occurred</div>;
  }
};

export default Teamus;
