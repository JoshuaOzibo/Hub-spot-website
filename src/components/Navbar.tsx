import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMenu4 } from "react-icons/tb";
import Button from "./Button";
import HubspotFullLogo from "../assets/logo/Hubspot_Full_Logo.svg";
import MobileNavLogo from "../assets/logo/hubSpotNavMobile.svg";
import Modal from "./Modal";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar items with corresponding content
  const menuItems = [
    { name: "Products", content: "Explore our cutting-edge products." },
    {
      name: "Solutions",
      content: "Discover tailored solutions for your business.",
    },
    { name: "Pricing", content: "Check our flexible pricing plans." },
    { name: "Resources", content: "Access valuable resources and guides." },
  ];

  return (
    <section className="bg-white z-50 w-full">
      {/* Top Navbar */}
      <main className="lg:flex hidden justify-between w-full lg:px-40 sm:px-4 px-2 py-3 items-center">
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">Customer Support</p>
          <p className="text-sm font-medium">Contact Sales</p>
        </div>

        <div className="flex items-center gap-4">
          <p>Login</p>
        </div>
      </main>

      {/* Main Navbar */}
      <nav
        className={`flex bg-white border-b w-full shadow-lg lg:px-40 sm:px-4 px-2 items-center justify-between ${
          isFixed ? "fixed top-0 border-b" : ""
        }`}
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" aria-label="HubSpot">
            <img
              src={isFixed ? MobileNavLogo : HubspotFullLogo}
              alt="HubspotLogo"
              className={isFixed ? "w-[30px] h-8" : "w-[100px] h-10"}
            />
          </a>

          {/* Navbar Items */}
          <ul className="md:flex hidden items-center gap-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative flex cursor-pointer items-center gap-1"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <p className="text-base font-medium text-[#213343]">
                  {item.name}
                </p>
                <IoIosArrowDown />
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="lg:flex hidden items-center gap-4">
          <Button
            className="bg-[#ff5c35] font-bold text-[#fff] py-2 px-4"
            value="Get a demo"
          />
          <Button
            className="text-[#ff5c35] font-semibold py-2 px-4"
            value="Get started free"
          />
        </div>

        {/* Mobile Menu */}
        <TbMenu4 className="lg:hidden block" size={45} />
      </nav>

      {/* Dropdown Modal - Shows different content based on activeDropdown */}
      {activeDropdown && (
        <Modal
          activeDropdown={activeDropdown}
          content={
            menuItems.find((item) => item.name === activeDropdown)?.content ||
            ""
          }
          setActiveDropdown={setActiveDropdown}
        />
      )}
    </section>
  );
};

export default Navbar;
