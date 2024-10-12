
import Address from "./address";
import EnquiryForm from "./contact-form";
const ContactUsPage = () => {
  return (
    <div className="bg-[#202125]">
      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url(/assest/company1.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative flex flex-col items-center justify-center h-full gap-3 text-center text-white">
          <h1 className="text-center text-white bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-wide text-transparent">Contact Us</h1>
          <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide">
            We create professional websites tailored for businesses and individuals, offering custom designs,

            advanced features, and seamless functionality.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 mt-5">
        <div className="order-2 lg:order-1">
          <Address />
        </div>

        <div className="flex flex-col gap-2 order-1 lg:order-2">
          <div className='flex items-center gap-2 sm:gap-3'>
            <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl font-bold leading-none text-transparent">
              Get
            </span>
            <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl font-bold leading-none text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>
              In Touch
            </span>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage
