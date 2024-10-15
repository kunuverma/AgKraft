import detail from "@/public/assest/ecom.jpeg";

export const Detail = () => {
  return (
    <div className="mt-10 px-14 ">
      <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
        <div className="lg:my-24 mt-5 flex lg:w-[50%] flex-col gap-10">
          <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
            E-commerce Design
          </h1>
          <p className="text-base font-medium text-gray-300 lg:w-[95%]">
            Our e-learning platform was born out of a shared vision and
            passion for transforming education. It all began with a group of
            educators, technologists, and lifelong learners who recognized
            the need for accessible, flexible, and high-quality learning
            opportunities in a rapidly evolving digital world.
          </p>
          <p className="text-base font-medium text-gray-300 lg:w-[95%]">
            As experienced educators ourselves, we witnessed firsthand the
            limitations and challenges of traditional education systems. We
            believed that education should not be confined to the walls of a
            classroom or restricted by geographical boundaries. We
            envisioned a platform that could bridge these gaps and empower
            individuals from all walks of life to unlock their full
            potential.
          </p>
          
        </div>

        <div>
          <img
            src={detail.src}
            alt=""
            className="shadow-[0px_0px_20px_3px_#a0aec0] rounded-xl lg:w-[40rem] w-[40]"
          />
        </div>
      </div>
    </div>
  )
}