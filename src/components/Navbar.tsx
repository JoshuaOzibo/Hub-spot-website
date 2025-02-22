import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMenu4 } from "react-icons/tb";
import Button from "./Button";
import HubspotFullLogo from "../assets/logo/Hubspot_Full_Logo.svg";
import MobileNavLogo from "../assets/logo/hubSpotNavMobile.svg";
import Modal from "./Modals/Modal";
import { menuItems } from "../db/Database";
import NavScrollableSection from "./NavScrollableSection";

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

  return (
    <section className="bg-white z-[99999] w-full">
      {/* Top Navbar */}
      <main className="lg:flex hidden ">
        <NavScrollableSection />
      </main>

      {/* Main Navbar */}
      <nav
        className={`flex bg-white border-b w-full shadow-lg lg:px-40 sm:px-4 px-2 justify-between z-[99999] ${
          isFixed ? "fixed top-0 border-b py-5" : ""
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
                className="relative flex pb-4 cursor-pointer items-center gap-1"
                onMouseEnter={() => item.name !== "Pricing" && setActiveDropdown(item.name)}
                onMouseLeave={() => item.name !== "Pricing" && setActiveDropdown(null)}
              >
                <p className="text-base font-medium text-[#213343]">
                  {item.name}
                </p>
                {item.name !== "Pricing" && <IoIosArrowDown />}
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
