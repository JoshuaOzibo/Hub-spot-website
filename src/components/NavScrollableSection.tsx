import { FaMicroscope } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

const NavScrollableSection = () => {
  const languages = ["English", "Spanish", "French", "German"]; 
  const about = ["About", "Team", "Careers", "Blog"]; 
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedAbout, setSelectedAbout] = useState(about[0]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    console.log("Selected language:", language);
  };
  const handleAboutChange = (about: string) => {
    setSelectedAbout(about);
    console.log("Selected language:", about);
  };

  return (
    <div className=" flex justify-between w-full lg:px-40 sm:px-4 px-2 py-3 items-center">
      <div className="flex items-center gap-2">
        <FaMicroscope />
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          selectedItem="language"
          icon={<FaMicroscope />}
        />
        <div className="flex items-center gap-2">
          <BiSolidMessageDetail />
          <p className="text-sm font-medium">Customer Support</p>
        </div>
        <div className="flex items-center gap-2">
          <IoIosContact />
          <p className="text-sm font-medium">Contact Sales</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p>Login</p>
        <LanguageSelector
          languages={about}
          selectedLanguage={selectedAbout}
          onLanguageChange={handleAboutChange}
          selectedItem="about"
        />
      </div>
    </div>
  );
};

export default NavScrollableSection;
