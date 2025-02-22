import ProductsModal from "./ProductsModal";
import ResourcesModal from "./ResourcesModal";
import SolutionsModal from "./SolutionsModal";

interface ModalProps {
    activeDropdown: string;
    content: string;
    setActiveDropdown: (value: string | null) => void;
  }

const Modal = ({ activeDropdown, content, setActiveDropdown }: ModalProps) => {

  console.log(activeDropdown === "Products")
    return (
        <div  className="fixed  w-screen h-screen bg-black bg-opacity-50 z-50">
        <div 
              onMouseEnter={() => setActiveDropdown(content)}
              onMouseLeave={() => setActiveDropdown(null)}
         className="absolute left-1/2 -translate-x-1/2 w-[82%] bg-white shadow-lg">
          {activeDropdown === "Products" && <ProductsModal />}
          {activeDropdown === "Solutions" && <SolutionsModal />}
          {activeDropdown === "Resources" && <ResourcesModal />}
        </div>
      </div>
    );
  };
  
  export default Modal;
  