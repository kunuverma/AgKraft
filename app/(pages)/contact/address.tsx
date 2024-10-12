import {
    FaAddressBook,
    FaPhoneAlt,
    FaUser,
    FaBalanceScale,
    FaUsers,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const inquiries = [
    {
        icon: FaUser,
        title: "Customer Support",
        text: "For general queries and customer support.",
    },
    {
        icon: FaBalanceScale,
        title: "Any Queries about website",
        text: "For any queries related to the website.",
    },
    {
        icon: FaUsers,
        title: "AGKraft Services",
        text: "For any queries related to the website.",
    },
];


const Address = () => {
    return (
        <div className="bg-[#202125] p-6">
            
            {/* Contact Form Section */}
            <section className="bg-transparent">

                {/* Office Information */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-white whitespace-pre-wrap text-3xl font-bold mb-5">Our Office</h2>
                    <div className="flex items-center gap-3">
                        <FaAddressBook className="text-[#f76329] text-2xl" />
                        <p className="text-base font-normal text-slate-200 tracking-wide">Pitampura, North-West Delhi, New Delhi, 110081</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-[#f76329] text-2xl" />
                        <p className="text-base font-normal text-slate-200 tracking-wide">Phone: +91 9876543210</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-[#f76329] text-2xl" />
                        <p className="text-base font-normal text-slate-200 tracking-wide">Email: agkraft01@gmail.com</p>
                    </div>

                    {/* Inquiry Section */}
                    <div className="space-y-6">
                        {inquiries.map(({ icon: Icon, title, text }, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Icon className="text-[#f76329] text-2xl" />
                                <div>
                                    <h3 className="text-base font-normal text-slate-200 tracking-wide">{title}</h3>
                                    {/* <p className="text-base font-normal text-slate-200 tracking-wide">{text}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Address;
