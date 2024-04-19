import Link from "next/link"
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className=" block lg:flex lg:flex-row-reverse justify-between lg:px-10 ">
        <div className="flex justify-center">
          <img src="/images/hero.png" alt="Hero Image"  className="w-[80%] py-8" />
        </div>
        <div className="lg:py-[12rem]">
          <h1 className="lg:text-[5rem] text-[2.5rem] text-[#518310] leading-snug font-bold lg:text-start text-center">
            Hello,Welcome to
            <br />
              Noteplug&apos;s E-Library
          </h1>
          <p className="text-[#333333] lg:text-[1.5rem] py-[1.5rem] font-normal lg:text-start text-center">
            Access a wide range of materials for your computer science course
          </p>
          <div className="gap-6 py-5 lg:text-start text-center">
            <Link href="/registration">
              <button
                className="bg-[#518310] text-white px-[4rem] py-5 lg:text-[2rem] rounded"
              >
                Get Started 
              </button>
            </Link>

            <Link href="/login">
              <button className="lg:text-[2rem] px-[4rem] py-4 bg-transparent ml-3 rounded border-[#d6d6d6] border text-[#333333] ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
