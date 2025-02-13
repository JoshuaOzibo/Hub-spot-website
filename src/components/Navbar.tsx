import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
import HubspotFullLogo from "../assets/logo/Hubspot_Full_Logo.svg";
// import HubspotLogo from "../assets/logo/Hubspot_Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex lg:px-40 sm:px-4 px-2 items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="" aria-label="HubSpot">
          <img src={HubspotFullLogo} alt="HubspotLogo" className="w-20 h-10" />
        </a>

        <ul className="lg:flex hidden items-center gap-4">
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
    </nav>
  );
};

export default Navbar;
