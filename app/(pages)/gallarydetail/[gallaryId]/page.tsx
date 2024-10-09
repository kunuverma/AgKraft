"use client"

import { useParams } from "next/navigation";
import { Projectdata } from "@/data/project";
import { GalleryDet } from "@/app/(pages)/gallarydetail/[gallaryId]/Gallarydetail";
import {Detail} from "@/app/(pages)/gallarydetail/[gallaryId]/Detail";

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
                <div className="">
                   
                    {/* {gallarydetails.id === "1" && <MehandiDetails />} */}
                    
                 <div className="z-20">
                    <GalleryDet/>
                    
                 </div>
                  
                    
                </div>
            )
        }

    } catch (error) {
        console.error(error);
    }
}

export default GalleryDetail