import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import Carousel from "./Components/Carousel/carousel";
import Footer from "./Components/Footer/footer";
import BookSliderComponent from "./Components/BookSlider/BookSliderData";

export default function Home() {
  return (
    <div>
      <div className="p-[30px]">
        <Header />
        <Hero />
        <div className="mt-[10rem]">
          <BookSliderComponent />
        </div>
      </div>
      <div className="p-[14rem]">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
