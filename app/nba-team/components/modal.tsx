import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return createPortal(
    <div className="fixed top-0 right-0 w-screen h-screen bg-slate-500 bg-opacity-60    z-100 flex items-center justify-center ">
      <button
        className="absolute bg-red-700 text-white px-6 py-1 rounded-sm top-4 right-4"
        onClick={onClose}
      >
        close Modal
      </button>
      <div className="bg-blue-500 px-4 py-6 text-white max-w-[600px] rounded-md">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
