"use client";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            className={`block w-full px-4 py-3 bg-transparent border-b ${
              errors.firstName ? "border-red-500" : "border-gray-600"
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
            className={`block w-full px-4 py-3 bg-transparent border-b ${
              errors.lastName ? "border-red-500" : "border-gray-600"
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
          className={`block w-full px-4 py-3 bg-transparent border-b ${
            errors.email ? "border-red-500" : "border-gray-600"
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
          className={`block w-full px-4 py-3 bg-transparent border-b ${
            errors.phone ? "border-red-500" : "border-gray-600"
          } focus:outline-none`}
          placeholder="Phone Number"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      {/* Services */}
      <div className="mb-6">
        <Select>
          <SelectTrigger className={` w-full px-4 py-3 bg-transparent`}>
            <SelectValue placeholder="Select Services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="app">App Development</SelectItem>
            <SelectItem value="soft">Software Development</SelectItem>
            <SelectItem value="digital">Digital Marketing</SelectItem>
            <SelectItem value="seo">SEO</SelectItem>
          </SelectContent>
        </Select>
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

export default EnquiryForm;
