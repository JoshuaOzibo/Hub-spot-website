import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  type: 'language' | 'about';
}

const Dropdown = ({ options, selectedOption, onOptionChange, }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex cursor-pointer items-center gap-1">
        <p className="text-sm font-medium">{selectedOption}</p>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                onOptionChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 