"use client";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  services: string;
  message: string;
  country?: string;
  city?: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  services: yup.string().required("Please select a service"),
  message: yup.string().required("Message is required"),
});

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 w-full max-w-lg bg-[#1B1C20] text-white rounded-lg "
    >
      <div className="grid grid-cols-2 gap-10 mb-6">
        <div>
          <input
            {...register("firstName")}
            className={`block w-full px-4 py-3 bg-transparent border-b ${errors.firstName ? "border-red-500" : "border-gray-600"
              } focus:outline-none`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div>
          <input
            {...register("lastName")}
            className={`block w-full px-4 py-3 bg-transparent border-b ${errors.lastName ? "border-red-500" : "border-gray-600"
              } focus:outline-none`}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <input
          {...register("email")}
          className={`block w-full px-4 py-3 bg-transparent border-b ${errors.email ? "border-red-500" : "border-gray-600"
            } focus:outline-none`}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Phone */}
      <div className="mb-6">
        <input
          {...register("phone")}
          className={`block w-full px-4 py-3 bg-transparent border-b ${errors.phone ? "border-red-500" : "border-gray-600"
            } focus:outline-none`}
          placeholder="Phone Number"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      {/* Country and City */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <input
            {...register("country")}
            className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            placeholder="Country "
          />
        </div>
        <div>
          <input
            {...register("city")}
            className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            placeholder="City "
          />
        </div>
      </div>

      {/* Comments */}
      <div className="mb-6">
        <textarea
          {...register("message")}
          className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          placeholder="Write your comments"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-8 mt-6 rounded-md bg-gradient-to-r from-[#f57b43] to-[#e02209]  text-white font-bold transition duration-200  hover:text-[#f1f3f5] "
      >
        ENQUIRY NOW
      </button>
    </form>
  );
};

const ContactUsPage = () => {
  return (
    <div className="bg-[#202125]">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/assest/company1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold text-[#FE523C]">Contact Us</h1>
          <p className="lg:mt-4 mt-6 text-xl lg:w-[50%] lg:text-center text-left lg:px-0 px-5 font-semibold text-gray-200">
            We create professional websites tailored for businesses and individuals, offering custom designs,

            advanced features, and seamless functionality.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            {/* Office Information */}
            <div className="relative lg:w-1/2  text-white p-8 rounded-l-xl shadow-lg">
           
             <div className="z-50">
             <h2 className="text-3xl font-bold mb-6 ">Our Office</h2>
              <p className="mb-4">
                <FaBuilding className="text-white text-2xl mr-2" />
                Pitampura, North-West Delhi, New Delhi, 110081
              </p>
              <p className="mb-4">
                <FaPhoneAlt className="text-white text-4xl mr-2" />
                Phone: +91 9876543210
              </p>
              <p className="mb-4">
                <FaEnvelope className="text-white text-4xl mr-2" />
                Email: agkraft01@gmail.com
              </p>
              <p className="mb-4">24/7 Available</p>

              {/* Inquiry Sections */}
              <div className="space-y-6">
                {[
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
                ].map(({ icon: Icon, title, text }, index) => (
                  <div key={index} className="flex items-center">
                    <Icon className="text-white text-3xl mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
             </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:w-1/2 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FE523C] to-[#ee6755] bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;
