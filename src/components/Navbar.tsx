import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
import HubspotFullLogo from "../assets/logo/Hubspot_Full_Logo.svg";
import { TbMenu4 } from "react-icons/tb";
import { TiMicrophone } from "react-icons/ti";
import { CgOptions } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import MobileNavLogo from "../assets/logo/hubSpotNavMobile.svg";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value (100) to change when the navbar becomes fixed
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white z-50 w-full">
      <main className="flex justify-between lg:px-40 sm:px-4 px-2 py-3 items-center">
        <div className="flex items-center gap-4">
          <div className="flex cursor-pointer items-center gap-1">
            <TiMicrophone />
            <p className="text-sm font-medium">English</p>
            <IoIosArrowDown />
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <CgOptions />
            <p className="text-sm font-medium">High Contrast</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <MdMessage />
            <p className="text-sm font-medium">Customer Support</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <HiUser />
            <p className="text-sm font-medium">Contact Sales</p>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-4">
          <IoIosSearch />
          <p>Login</p>
          <p>About</p>
        </div>
      </main>
      <nav
        className={`flex bg-white w-full shadow-lg lg:px-40 sm:px-4 px-2 py-4 items-center justify-between ${
          isFixed ? "fixed -mt-12" : ""
        }`}
      >
        <div className="flex transition-all duration-300 items-center gap-8">
          <a href="" aria-label="HubSpot">
            {isFixed && <img src={MobileNavLogo} alt="HubspotLogo" className=" w-[30px] h-8"/>}
            {!isFixed && <img src={HubspotFullLogo} alt="HubspotLogo" className=" w-[100px] h-10"/>}
          </a>

          <ul className="md:flex hidden items-center gap-4">
            <li className=" flex items-center gap-1">
              <p className="text-base font-medium text-[#213343]">Products</p>
              <IoIosArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              <p className="text-base font-medium text-[#213343]">Solutions</p>
              <IoIosArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              <p className="text-base font-medium text-[#213343]">Pricing</p>
              <IoIosArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              <p className="text-base font-medium text-[#213343]">Resources</p>
              <IoIosArrowDown />
            </li>
          </ul>
        </div>

        <div className="lg:flex hidden items-center gap-4">
          <Button
            className=" bg-[#ff5c35] font-bold text-[#fff] py-2 px-4 "
            value="Get a demo"
          />
          <Button
            className=" text-[#ff5c35] font-semibold py-2 px-4"
            value="Get started free"
          />
        </div>

        <TbMenu4 className="lg:hidden block" size={45} />
      </nav>
    </section>
  );
};

export default Navbar;
