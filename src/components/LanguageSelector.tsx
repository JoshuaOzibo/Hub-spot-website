import { Tooltip } from "react-tooltip";
import { IoIosArrowDown } from "react-icons/io";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  icon?: React.ReactNode;
  selectedItem: string;
}

const LanguageSelector = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange,
  selectedItem,
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
        data-tooltip-id={`${selectedItem}-tooltip`}
        data-tooltip-place="bottom"
      >
        <p className="text-sm font-medium">{selectedLanguage}</p>
        <IoIosArrowDown />
      </div>
      <Tooltip
        id={`${selectedItem}-tooltip`}
        className="!bg-white border border-black text-black shadow-lg rounded-md !opacity-100 !p-0"
        clickable={true}
      >
        {languageContent}
      </Tooltip>
    </>
  );
};

export default LanguageSelector; 