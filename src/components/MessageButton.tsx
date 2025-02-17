import { MdMessage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const MessageButton = ({ setIsOpen, isOpen }: { setIsOpen: (isOpen: boolean) => void, isOpen: boolean }) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="p-4 cursor-pointer hover:z-50 bg-[#2d475e] rounded-full">
      {isOpen && <MdMessage size={30} className="text-white text-2xl" />}

      {!isOpen && <IoMdClose size={30} className="text-white text-2xl" />}
    </button>
  );
};

export default MessageButton;
