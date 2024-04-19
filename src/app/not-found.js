import Image from "next/image";
import Header from "./Components/Header/header";
const Custom404 = () => {
  return (
    <>
      <Header />
      <div className="text-center pt-[10rem]">
          <h1 className="text-[15rem] lg:text-[25rem] text-[#518310] leading-none">404</h1>
          <p className="text-[1.5rem] lg:text-[3rem]">Oop&apos;s <br/>The page you are looking for does not exist</p>
          <button href="http://localhost:3000" className="bg-[#518310] text-white px-[4rem] py-5 lg:text-[2rem] rounded mt-5">Return Home</button>
      </div>
    </>
  );
};
export default Custom404;
