"use client"
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookComponent = ({ courses }) => {
  
  // Settings for react-slick carousel
  const settings = {
    autoplay:true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '150px', // Adjust the padding as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px', // Adjust the padding as needed
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {courses.map(({ href, image, title, hint, author, name, download, COS232 }) => (
          <div key={title}>
            <Link href={href} className=" items-center">
              <div className="p-[3rem] bg-white w-full shadow-xl hover:shadow-none">
                <img src={image} alt="Material"  className="w-full" />
                <h1 className="text-[2rem] font-medium pt-5 truncate">
                  {title}
                </h1>
                <p className="text-xl py-3 "> {hint}</p>
                <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                  <div className="flex items-center gap-3">
                    <img src={author} alt="" />
                    {name}
                  </div>
                  <div>
                  </div>
                
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookComponent;
