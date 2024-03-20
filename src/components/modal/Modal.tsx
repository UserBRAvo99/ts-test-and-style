import { IoClose } from "react-icons/io5";

interface IChildForModal {
  children: JSX.Element;
  isOpen: () => void;
}

const Modal = ({ isOpen, children }: IChildForModal) => {
  return (
    <>
      <div className="flex w-screen h-screen opacity-50 bg-slate-500 absolute left-0 top-0 "></div>
      <div className="flex w-60 h-60 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
        <button
          onClick={isOpen}
          className="absolute right-3 top-3 border-2 border-black rounded-full"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
