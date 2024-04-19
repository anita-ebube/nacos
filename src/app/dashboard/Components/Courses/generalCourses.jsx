"use client"
import Link from "next/link";
const GeneralCourses = (props) => {
  const downloadFileAtURL = (url,event) =>{
    event.preventDefault()
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href =url
    aTag.setAttribute('download',fileName)
    document.body.appendChild (aTag)
    aTag.click();
    aTag.remove();
}
  return (
    <div>
      
      <div className="block gap-10">
          <div className="mt-10">
            <Link href={`${props.link}`} className=" items-center">
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
                  <div>
                  </div>
                  <button onClick={(event)=>{downloadFileAtURL(COS232,event)}}> <img src={props.download} alt="download" className="w-8/12"/></button>
                </div>
              </div>
            </Link>
          </div>

      </div>
    </div>
  );
};
export default GeneralCourses;