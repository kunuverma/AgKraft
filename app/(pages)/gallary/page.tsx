"use client";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [designFilter, setDesignFilter] = useState<string | null>(null);
  const [techFilter, setTechFilter] = useState<string | null>(null);
  const [items, setItems] = useState<any[]>([
    { id: 1, image: "/assest/ecom.jpeg", name: "Item 1" },
    { id: 2, image: "/assest/mehendi.png", name: "Item 2" },
    { id: 3, image: "/assest/ios.jpeg", name: "Item 3" },
    { id: 4, image: "/assest/port.png", name: "Item 4" },
    { id: 5, image: "/assest/tablet.png", name: "Item 5" },
    { id: 6, image: "/assest/tech.jpg", name: "Item 6" },
    { id: 7, image: "/assest/water.jpg", name: "Item 7" },
    { id: 8, image: "/assest/web1.jpeg", name: "Item 8" },
    { id: 9, image: "/assest/ecommerce.jpg", name: "Item 9" },
    { id: 10, image: "/assest/coin.jpg", name: "Item 10" },
  ]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const technologies = [
    "WordPress",
    "MERN",
    "Java",
    "C++",
    "React",
    "Vue",
    "Angular",
    "PHP",
    "Ruby",
    "Django",
  ];
  const designs = ["E-commerce", "Portfolio", "Banking", "Business Idea"];

  // Fetch items with filters applied
  const applyFilters = async () => {
    setLoading(true);
    const response = await fetch(
      `/api/getItems?page=${page}&price=${priceFilter}&design=${designFilter}&tech=${techFilter}`
    );
    const data = await response.json();
    setItems(data); // Reset items based on the applied filters
    setLoading(false);
  };

  // Lazy loading data
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      // Simulating fetch API call
      const response = await fetch(
        `/api/getItems?page=${page}&price=${priceFilter}&design=${designFilter}&tech=${techFilter}`
      );
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data]); // Append new items to the existing list
      setLoading(false);
    };
    fetchItems();
  }, [page]);

  // Handle scroll for lazy loading
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      {/* Filter Sidebar */}
      <div className="md:w-1/5 w-full p-4 bg-gray-100 space-y-4">
        {/* Price Dropdown */}
        <div>
          <label className="block mb-2">Sort by Price</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Select</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Design Dropdown */}
        <div>
          <label className="block mb-2">Design</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setDesignFilter(e.target.value)}
          >
            <option value="">Select Design</option>
            {designs.map((design) => (
              <option key={design} value={design}>
                {design}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Dropdown */}
        <div>
          <label className="block mb-2">Technology</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setTechFilter(e.target.value)}
          >
            <option value="">Select Technology</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Apply Filters Button */}
        <div className="pt-4">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="md:w-4/5 w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-2 text-xl">{item.name}</h2>
          </div>
        ))}
        {loading && <div className="col-span-3 text-center">Loading more...</div>}
      </div>
    </div>
  );
};

export default Gallery;
