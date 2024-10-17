// timelineData.ts
import Image from "next/image";
import card1 from "@/public/assest/card1.png";

export const timelineData = [
  {
    title: "Custom website design and development",
    content: (
      <div>
        <p className="text-neutral-100 text-xs md:text-lg font-normal mb-8 tracking-wide leading-3 md:leading-8">
          At AGKraft, our custom website design and development services focus
          on building unique, tailor-made websites that align perfectly with
          your business goals and brand identity. We work closely with you from
          the initial concept to the final launch, ensuring every aspect of the
          website reflects your vision. Using modern tools and frameworks, we
          create responsive, user-friendly, and high-performance websites that
          offer an exceptional user experience. Whether you need a simple
          brochure website or a complex web application, we deliver scalable
          solutions designed to grow with your business. Our attention to
          detail, seamless functionality, and aesthetically appealing designs
          ensure your website stands out in a competitive market.
        </p>
      </div>
    ),
  },
  {
    title: "CMS Integration (WordPress, Shopify, etc.)",
    content: (
      <div>
        <p className="text-neutral-100 text-xs md:text-lg font-normal mb-8 tracking-wide leading-3 md:leading-8">
          Our CMS integration services are designed to give you complete control
          over your website’s content without requiring technical expertise.
          Whether it's WordPress, Shopify, Magento, or any other platform, we
          seamlessly integrate powerful Content Management Systems tailored to
          your business needs. With easy-to-use dashboards and customizable
          features, you can manage products, pages, and posts effortlessly. We
          ensure that the CMS is optimized for performance, security, and
          scalability, so your site can grow as your business expands. Our team
          also provides training and ongoing support to help you get the most
          out of your CMS.
        </p>
      </div>
    ),
  },
  {
    title: "E-commerce Solutions",
    content: (
      <div>
        <p className="text-neutral-100 text-xs md:text-lg font-normal mb-8 tracking-wide leading-3 md:leading-8">
          At AGKraft, we specialize in developing robust and scalable e-commerce
          solutions tailored to your business needs. Whether you're launching a
          new online store or upgrading an existing platform, we ensure a
          seamless shopping experience for your customers. Our team focuses on
          intuitive design, secure payment gateways, and efficient product
          management, helping you drive conversions and boost sales. We build
          with scalability in mind, so your platform grows as your business
          expands. With advanced features like custom integrations, inventory
          management, and analytics, we deliver e-commerce solutions that
          maximize your business potential.
        </p>
      </div>
    ),
  },
  {
    title: "Responsive and Mobile-First Designs",
    content: (
      <div>
        <p className="text-neutral-100 text-xs md:text-lg font-normal mb-8 tracking-wide leading-3 md:leading-8">
          At AGKraft, we prioritize responsive and mobile-first design to ensure
          that your website delivers an exceptional user experience across all
          devices. With the majority of users accessing websites from mobile
          phones and tablets, we create designs that adapt seamlessly to any
          screen size. Our approach guarantees that your content remains
          accessible, engaging, and easy to navigate, whether on a smartphone,
          tablet, or desktop. By focusing on mobile-first principles, we
          optimize performance and loading times, providing your visitors with a
          fast, intuitive experience. This not only improves user engagement but
          also enhances your site's search engine ranking.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Optimization & Performance",
    content: (
      <div>
        <p className="text-neutral-100 text-xs md:text-lg font-normal mb-8 tracking-wide leading-3 md:leading-8">
          At AGKraft, we ensure that your website is not only visually appealing
          but also optimized for search engines to drive organic traffic. Our
          developers follow SEO best practices, such as clean coding, proper use
          of meta tags, and structured data implementation, to improve your
          site's search engine visibility. We also focus on performance
          optimization by minimizing load times, leveraging browser caching, and
          optimizing images. This enhances both user experience and search
          rankings, ensuring your website is fast, responsive, and easily
          discoverable on search engines like Google.
        </p>
      </div>
    ),
  },
];

// data/content.ts
export const pageContent = {
  subtitle:
    "Discover a seamless collaboration where we build robust, tailored solutions aligned with your unique needs. Our approach, whether through dedicated teams or strategic augmentation, ensures a dynamic and efficient software development process, optimizing resources for project success.",
  services: [
    {
      title: "Understanding Your Vision",
      description:
        "We begin with an in-depth consultation to fully understand your business goals, target audience, and design preferences. This helps us align our strategy with your vision and deliver a website that meets your unique needs",
      icon: "🌐",
    },
    {
      title: "Transparent Communication",
      description:
        "Throughout the project, we maintain clear and open communication, providing regular updates, sharing progress, and gathering your feedback at every stage, ensuring a smooth and collaborative development process.",
      icon: "👥",
    },
    {
      title: "Personalized Solutions & Ongoing Support",
      description:
        "We create tailored solutions designed specifically for your business and continue to offer support post-launch to make updates, optimize performance, and ensure your website remains effective over time.",
      icon: "👨‍💻",
    },
  ],
};

export const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-blue-700">
        <p>Product Tab</p>
        <h1>web</h1>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-blue-700">
        <p>Services tab</p>
        <h1>web</h1>
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-blue-700">
        <p>Playground tab</p>
        <div className="object-left-top h-[60%] bg-red-800  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto">
            <h1>dsijcdsijcds</h1>
        </div>
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-blue-700">
        <p>Content tab</p>
        <h1>web</h1>
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Random tab</p>
        <h1>web</h1>
      </div>
    ),
  },
];

export const cardsData = [
    {
      value: "discovery",
      title: "Discovery",
      description: "In the discovery phase, we research the client's requirements, analyze the competition, and define the project goals.",
    },
    {
      value: "design",
      title: "Design",
      description: "An intricate UI/UX design is then created, including the software architecture, database structure, and user interface.",
    },
    {
      value: "development",
      title: "Development",
      description: "The development phase involves the coding and creation of the software based on the design and requirements.",
    },
    {
      value: "testing",
      title: "Testing & QA",
      description: "In this phase, we perform rigorous testing to ensure the software is free of bugs and meets all requirements.",
    },
    {
      value: "deployment",
      title: "Deployment & Support",
      description: "In the final phase, the software is deployed and ongoing support is provided to ensure its smooth operation.",
    },
  ];
  

