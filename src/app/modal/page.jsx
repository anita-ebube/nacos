"use client"
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="place-self-start items-end" onClick={toggleModal}>X</button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50" onClick={toggleModal}>
          <div className="bg-white rounded-lg p-10 max-w-[50%]" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between">
              <div>
                <img src="/images/notes/1.png" alt="" />
              </div>
              <div className="w-[50%]">
                <h1 className="text-xl font-bold mb-2">COS 101</h1>
                <span className="text-gray-600 block mb-4">Lorem ipsum dolor laudantium.</span>
                <p className="text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
                  autem itaque amet vel nihil! Maxime doloremque cum esse eius porro
                  id molestiae distinctio molestias aut, quibusdam recusandae
                  dignissimos non suscipit! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nesciunt, dolorem hic. Quae voluptates harum
                  molestiae qui quisquam, ipsa, magnam delectus, sit repellendus
                  dolorem vitae aspernatur? Officiis eaque suscipit debitis. Maxime!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
