export  const Navitems = [
    {
      name: "Gallery",
      path: "/",
    },
    {
      name: "Events",
      submenus: ["Latest Posts", "Trending", "Categories", "Archives"],
    },
    {
      name: "About Us",
      path: "/",
      submenus: [
        { name: "Our Mission", path: "/" },
        { name: "Our Vision", path: "/" },
        { name: "Why mAICourt?", path: "/" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact",
      submenus: [
        { name: "Support", path: "/contact" },
        { name: "FAQ", path: "/contact" },
        { name: "Customer Service", path: "/contact" },
        { name: "Reach Us", path: "/contact" },
      ],
    },
    {
      name: "Join Us",
      submenus: [
        { name: "LogIn", path: "/login" },
        { name: "SignUp", path: "/register" },
      ],
    },
  ];