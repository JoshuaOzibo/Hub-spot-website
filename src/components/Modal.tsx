interface ModalProps {
    activeDropdown: string;
    content: string;
    setActiveDropdown: (value: string | null) => void;
  }

const Modal = ({ activeDropdown, content, setActiveDropdown }: ModalProps) => {
    return (
        <div  className="fixed  w-screen h-screen bg-black bg-opacity-50 z-50">
        <div 
              onMouseEnter={() => setActiveDropdown(content)}
              onMouseLeave={() => setActiveDropdown(null)}
         className="absolute left-0 w-full bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold">{activeDropdown}</h2>
        </div>
      </div>
    );
  };
  
  export default Modal;
  