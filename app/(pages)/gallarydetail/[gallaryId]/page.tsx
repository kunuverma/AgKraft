"use client"

import { useParams } from "next/navigation";
import { Projectdata } from "@/data/project";

import MehandiDetails from "@/app/(pages)/gallarydetail/components/mehandi";

const GalleryDetail = () => {
    const { gallaryId } = useParams();
    console.log(gallaryId)

    try {
        if (!gallaryId) {
            return <div>Loading...</div>;
        }

        // Find the project based on the id from the URL
        const gallarydetails = Projectdata.find(project => project.id === gallaryId);

        if (!gallarydetails) {
            return <div>Project not found</div>;
        } else {
            return (
                <div className="h-screen">
                    {gallarydetails.id === "1" && <MehandiDetails />}
                </div>
            )
        }

    } catch (error) {
        console.error(error);
    }
}

export default GalleryDetail