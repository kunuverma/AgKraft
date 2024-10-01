import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import contact from "@/public/assest/CONTACT US.gif"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    services: string;
    message: string;
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
        <div className="flex flex-col justify-center items-center gap-12 h-full bg-gradient-to-r from-sky-100 from-10% via-slate-100 via-80% to-gray-100 to-90%">
            <div className="flex justify-center items-center gap-3 mt-8">
                <h1 className="text-4xl text-[#FF3115] font-bold bg-clip-text leading-none tracking-tighter whitespace-pre-wrap">Contact Us</h1>
                <span className="mt-[2px] whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-4xl font-bold leading-none tracking-tighter text-transparent">
                    Today
                </span>
            </div>

            <div className='flex flex-col md:flex-row gap-10 md:gap-36 bg-white rounded-xl px-4 md:px-0 mb-5'>
                {/* Image */}
                <div className='hidden md:block rounded-xl'>
                    <Image
                        className="w-[450px] h-full rounded-xl"
                        src={contact}
                        alt=""
                    />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-8 rounded-lg w-full max-w-lg mt-4">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <input
                                {...register('firstName')}
                                className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                                placeholder="First Name"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <input
                                {...register('lastName')}
                                className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                                placeholder="Last Name"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <input
                            {...register('email')}
                            className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                            placeholder="Email Address"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="mt-6">
                        <input
                            {...register('phone')}
                            className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                            placeholder="Phone Number"
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>

                    <div className="mt-6">
                        <input
                            {...register('services')}
                            className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.services ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                            placeholder="Services"
                        />
                        {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
                    </div>

                    <div className="mt-6">
                        <textarea
                            {...register('message')}
                            className={`block w-full px-2 py-2 text-gray-700 border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none placeholder:text-base placeholder:font-light`}
                            placeholder="Message"
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="px-8 py-2 mt-6 w-full rounded-md bg-blue-600 text-white font-bold transition duration-200 hover:bg-white hover:text-[#121C2D] border-2 border-transparent hover:border-[#FD3930]">
                        ENQUIRY NOW
                    </button>
                </form>
            </div>

        </div>
    );
};

export default EnquiryForm;
