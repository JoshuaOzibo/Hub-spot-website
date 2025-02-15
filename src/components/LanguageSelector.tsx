import { Tooltip } from "react-tooltip";
import { IoIosArrowDown } from "react-icons/io";
import { TiMicrophone } from "react-icons/ti";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  icon?: React.ReactNode;
}

const LanguageSelector = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange,
  icon = <TiMicrophone />
}: LanguageSelectorProps) => {
  const languageContent = (
    <div className="py-2 bg-white min-w-[120px]">
      {languages.map((lang, index) => (
        <div 
          key={index}
          className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer text-sm"
          onClick={() => onLanguageChange(lang)}
        >
          {lang}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div 
        className="flex cursor-pointer items-center gap-1"
        data-tooltip-id="language-tooltip"
        data-tooltip-place="bottom"
      >
        {icon}
        <p className="text-sm font-medium">{selectedLanguage}</p>
        <IoIosArrowDown />
      </div>
      <Tooltip
        id="language-tooltip"
        className="!bg-white text-black shadow-lg rounded-md !opacity-100 !p-0"
        clickable={true}
      >
        {languageContent}
      </Tooltip>
    </>
  );
};

export default LanguageSelector; 