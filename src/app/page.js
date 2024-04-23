import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import BookSliderData from "./Components/BookSlider/BookSliderData";
// import Book
import Carousel from "./Components/Carousel/carousel";
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
    <div>
      <div className="p-[30px]">
        <Header />
        <Hero />
        <div className="mt-[10rem]">
          <BookSliderData />
        </div>
      </div>
      <div className="p-[14rem]">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
