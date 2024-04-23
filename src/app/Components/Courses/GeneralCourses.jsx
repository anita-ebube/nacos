"use client";
import Link from "next/link";
import { useState } from "react";

const GeneralCourses = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const fileUrl =
    "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh";
  const downloadFile = (fileUrl) => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    const fileName = fileUrl.split("/").pop();
    anchor.setAttribute("download", fileName);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const toggleModal = () => {
    
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault()
    setIsOpen(false);
  };
  return (
    <div>
      <div className="block  gap-10">
        <div className="mt-10">
          <Link href={props.href} className=" items-center">
            <div className="p-[3rem] bg-white w-full shadow-xl hover:shadow-none">
              <div onClick={toggleModal}>
                <img src={props.image} alt="" className="w-full" />
                <h1 className="text-[2rem] font-medium pt-5 truncate">
                  {props.title}
                </h1>
              </div>
              <p className="text-xl py-3 "> {props.hint}</p>
              <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                <div className="flex items-center gap-3">
                  <img src={props.author} alt="" />
                  {props.name}
                </div>
                <button
                  onClick={() => {
                    downloadFile(fileUrl);
                  }}
                >
                  {" "}
                  <img src={props.download} alt="download" className="w-8/12" />
                </button>
                {isOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
                    onClick={toggleModal}
                  >
                    <div
                      className="bg-white rounded-lg p-10 max-w-[50%]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="text-4xl mr-auto ml-0">
                        <button onClick={handleClose}>x</button>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <img src={props.image} alt="Book Cover" />
                        </div>
                        <div className="w-[50%]">
                          <h1 className="text-[2rem] font-bold mb-2">
                            {props.title}
                          </h1>
                          <span className="text-gray-600 block mb-4 text-xl">
                            {props.hint}
                          </span>
                          <p className="text-gray-700">
                            This book gives an insight og how Artificial intelligence (AI) is a branch of computer science that focuses on creating systems or machines capable of performing tasks that would typically require human intelligence. These tasks include things like understanding natural language, recognizing patterns, learning from experience, and making decisions. AI technologies aim to replicate or simulate human cognitive functions such as problem-solving, perception, reasoning, and learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GeneralCourses;
