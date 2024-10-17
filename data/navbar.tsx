// export const Navitems = [
//   {
//     name: "About Us",
//     path: "/about",
//   },
//   {
//     name: "Work",
//     path: "/work",
//   },
//   {
//     name: "Services",
//     submenus: [
//       { name: "Web Development", path: "/companyservice/Web-Development" },
//       { name: "App Development", path: "/services/App-Development" },
//       { name: "Software Development", path: "/services/Software-Development" },
//       { name: "Digital Marketing", path: "/services/Digital-Marketing" },
//       { name: "IOS App Development", path: "/services/IOS-App-Development" },
//       { name: "UI/UX Design", path: "/services/UI-UX-Design" },
//       { name: "SEO", path: "/services/SEO" },
//       { name: "Social Media Marketing", path: "/services/Social-Media-Marketing" },
//       { name: "Ecommerce Development", path: "/services/Ecommerce-Development" },
//     ],
//   },
//   {
//     name: "Company",
//     submenus: [
//       { name: "Our Team", path: "/team" },
//       { name: "Careers", path: "/Career" },
//       { name: "Blog", path: "/Blog" },
//     ],
//   },
// ];

export const Navitems = [
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Services",
    submenus: [
      { id: "1", name: "Web Development", path: "/companyservice/[id]" },
      { id: "2", name: "App Development", path: "/companyservice/[id]" },
      { id: "3", name: "Software Development", path: "/companyservice/[id]"},
      { id: "4", name: "Digital Marketing", path: "/companyservice/[id]" },
      { id: "5", name: "IOS App Development", path: "/companyservice/[id]" },
      { id: "6", name: "UI/UX Design", path: "/companyservice/[id]" },
      { id: "7", name: "SEO", path: "/companyservice/[id]" },
      { id: "8", name: "Social Media Marketing", path: "/companyservice/[id]" },
      { id: "9", name: "Ecommerce Development", path: "/companyservice/[id]" },
    ],
  },
  {
    name: "Company",
    submenus: [
      { id: "10", name: "Our Team", path: "/teamservices/[id]" },
      { id: "11", name: "Careers", path: "/Career" },
      { id: "12", name: "Blog", path: "/Blog" },
    ],
  },
];

