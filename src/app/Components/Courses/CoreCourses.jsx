"use client";
import Link from "next/link";

const CoreCourses = (props) => {
  const fileUrl = "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh"
  const downloadFile = (fileUrl) => {
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    const fileName = fileUrl.split('/').pop();
    anchor.setAttribute('download', fileName);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  
  return (
    <div>
      <div className="block  gap-10">
        <div className="mt-10">
          <Link href={props.href} className=" items-center">
            <div className="p-[3rem] bg-white w-full shadow-xl hover:shadow-none">
              <img src={props.image} alt="" className="w-full" />
              <h1 className="text-[2rem] font-medium pt-5 truncate">
                {props.title}
              </h1>
              <p className="text-xl py-3 "> {props.hint}</p>
              <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                <div className="flex items-center gap-3">
                  <img src={props.author} alt="" />
                  {props.name}
                </div>
                <button onClick={() =>{downloadFile(fileUrl)}}
                >
                  {" "}
                  <img src={props.download} alt="download" className="w-8/12" />
                </button>
                
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CoreCourses;
