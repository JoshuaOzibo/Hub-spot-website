import { MdCancel } from "react-icons/md";

const WantToChatCircle = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) => {
  return (
    <section className=" w-[350px] rounded-full p-4">
        <div className="flex justify-end mb-2 mr-5">
        <MdCancel onClick={() => setIsOpen(false)} size={22} className="text-gray-600 cursor-pointer" />
        </div>
      <main className="border-2 border-gray-400 bg-white p-6 rounded-full">
        <p className=" text-sm">Want to chat about HubSpot? I'm an AI chatbot here to help you find your way.</p>
      </main>
    </section>
  );
};

export default WantToChatCircle;    