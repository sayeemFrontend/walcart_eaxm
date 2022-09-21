import React from "react";
import cross from "./cross.svg";
export default function Modal({ children, onClose }) {
  return (
    <div className="modal  py-4 z-50 md:hidden w-full min-h-screen h-[1600px]  bg-gray-400 absolute left-0 top-0">
      <div className="w-3/4 mx-auto flex justify-end  cursor-pointer">
        <img onClick={onClose} src={cross} alt="icon-cross" />
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}
