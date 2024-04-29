"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 className="text-[#518310] text-center text-4xl lg:text-5xl font-semibold pt-[8rem] pb-[3rem]">How it Works</h1>
      <Swiper
      style={{
        "--swiper-navigation-color": "#518310",
        "--swiper-navigation-size": "25px",
      }}
        slidesPerView={1}
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="text-left px-[4rem]">
            <div className="px-12">
              <h1 className="text-[#518310] text-2xl lg:text-5xl font-semibold py-4">
                Register/Log In
              </h1>
              <p className="lg:text-2xl">
                Click Get Started is other register or log in{" "}
              </p>
              <p className="lg:text-2xl">If you have an account</p>
            </div>
            <Image
              src="/images/carousel/register.png"
              alt="Register"
              width={500}
              height={500}
              className="py-7"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/carousel/01.png"
            alt="Step 1"
            className=" m-auto pt-[12rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left px-[4rem]">
            <div className="px-12">
              <h1 className="text-[#518310] text-2xl lg:text-5xl font-semibold py-4">
                Accessing Your Dashboard
              </h1>
              <p className="lg:text-2xl">
                Find the material you need by searching for it{" "}
              </p>
              <p className="lg:text-2xl">under courses and by level</p>
            </div>
            <Image
              src="/images/carousel/dashboard.png"
              alt="Dashboard"
              width={500}
              height={500}
              className="py-7"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/carousel/02.png"
            alt="Step 2"
            className=" m-auto pt-[12rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left px-[4rem]">
            <div className="px-12">
              <h1 className="text-[#518310] text-2xl lg:text-5xl font-semibold py-4">
                Downloading A Material
              </h1>
              <p className="lg:text-2xl">
                Click on the download button at the buttom{" "}
              </p>
              <p className="lg:text-2xl">
                right of the material you wish to download
              </p>
            </div>
            <Image
              src="/images/carousel/download.png"
              alt="Download"
              width={500}
              height={500}
              className="py-7"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/carousel/03.png"
            alt="Step 3"
            className=" m-auto pt-[12rem]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
