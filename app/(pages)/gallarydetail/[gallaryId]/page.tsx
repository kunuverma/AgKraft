// "use client"

// import { useParams } from "next/navigation";
// import { Projectdata } from "@/data/project";
// import { GalleryDet } from "@/app/(pages)/gallarydetail/[gallaryId]/Gallarydetail";

// // import MehandiDetails from "@/app/(pages)/gallarydetail/components/mehandi";

// const GalleryDetail = () => {
//     const { gallaryId } = useParams();
//     console.log(gallaryId)

//     try {
//         if (!gallaryId) {
//             return <div>Loading...</div>;
//         }

//         // Find the project based on the id from the URL
//         const gallarydetails = Projectdata.find(project => project.id === gallaryId);

//         if (!gallarydetails) {
//             return <div>Project not found</div>;
//         } else {
//             return (
//                 <div className="">
                   
//                     {/* {gallarydetails.id === "1" && <MehandiDetails />} */}
                    
//                  <div className="z-20">
//                     <GalleryDet/>
                    
//                  </div>
                  
                    
//                 </div>
//             )
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }

// export default GalleryDetail

// pages/gallarydetail/[gallaryId]/page.tsx (server component)

import { Projectdata } from "@/data/project";
import { GalleryDet } from "@/app/(pages)/gallarydetail/[gallaryId]/Gallarydetail";

// This will generate static params for all gallery details
export async function generateStaticParams() {
  // Get all gallery IDs from your project data
  const galleryIds = Projectdata.map(project => project.id);

  return galleryIds.map(gallaryId => ({
    gallaryId, // Next.js expects this format
  }));
}

// The Gallery Detail Page Component
export default function GalleryDetail({ params }: { params: { gallaryId: string } }) {
  const { gallaryId } = params;

  // Find the project details based on gallaryId
  const gallarydetails = Projectdata.find(project => project.id === gallaryId);

  if (!gallarydetails) {
    return <div>Project not found</div>;
  }

  return (
    <div className="z-20">
      <GalleryDet />
    </div>
  );
}
