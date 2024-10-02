import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import contact from "@/public/assest/CONTACT US.gif";
// Replace with the new image path

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
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
    services: yup.string().required('Please select a service'),
    message: yup.string().required('Message is required'),
});

const EnquiryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center gap-12 my-5 items-center mx-5 sm:mx-10 bg-[#191A1E] h-full shadow-[0px_0px_5px_0px_#EF476F] rounded-md transition-all duration-300 ease-in-out hover:shadow-[0px_0px_5px_0px_#EF476F] hover:border-orange-500 border border-gray-700">
            <div className='flex items-center gap-2 sm:gap-3 mt-5'>
                <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent">
                    Contact Us
                </span>
                <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>Today</span>
            </div>

            <div className='flex flex-col md:flex-row gap-10 md:gap-36 rounded-xl px-4 md:px-0 mb-5'>
                {/* Image */}
                <div className='hidden md:block rounded-xl'>
                    <Image
                        className="w-[450px] h-[450px] rounded-xl"
                        src={contact} // Replacing with the new image
                        alt="Contact Us Graphic"
                    />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full max-w-lg bg-[#1B1C20] text-white rounded-lg shadow-md">
                    <div className="grid grid-cols-2 gap-10 mb-6">
                        <div>
                            <input
                                {...register('firstName')}
                                className={`block w-full px-4 py-3 bg-transparent border-b ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:outline-none`}
                                placeholder="First Name"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <input
                                {...register('lastName')}
                                className={`block w-full px-4 py-3 bg-transparent border-b ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:outline-none`}
                                placeholder="Last Name"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <input
                            {...register('email')}
                            className={`block w-full px-4 py-3 bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none`}
                            placeholder="Email"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                        <input
                            {...register('phone')}
                            className={`block w-full px-4 py-3 bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-gray-600'} focus:outline-none`}
                            placeholder="Phone Number"
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>

                    {/* Country and City */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <input
                                {...register('country')}
                                className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
                                placeholder="Country (Optional)"
                            />
                        </div>
                        <div>
                            <input
                                {...register('city')}
                                className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
                                placeholder="City (Optional)"
                            />
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="mb-6">
                        <textarea
                            {...register('message')}
                            className="block w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
                            placeholder="Write your comments"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-8 mt-6 rounded-md bg-blue-600 text-white font-bold transition duration-200 hover:bg-white hover:text-[#121C2D] border-2 border-transparent hover:border-[#FD3930]">
                        ENQUIRY NOW
                    </button>
                </form>
            </div>

        </div>
    );
};

export default EnquiryForm;
