import React from "react";
import Slider from "react-slick";
import SliderData from "../../data/SliderData";
import Button from "../../shared/Button";

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden w-full rounded-3xl max-h-[650px] sm:max-h-[550px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0 w-full">
          {/* Hero Section */}
          <Slider {...settings}>
          {SliderData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center gap-1 md:gap-2 sm:pl-3 pt-23 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 className="text-2xl text-red-500 lg:text-2xl font-bold ">{data.subtitle}</h1>
                    <h1 className="sm:text-5xl text-4xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 className="uppercase text-white dark:text-white/5 text-[40px] sm:text-[60px] md:text-[80px] xl:text-[130px] font-bold">{data.title2}</h1>
                    <div>
                      <Button text="Shop Now" bgColor={"bg-primary"} textColor={"text-white"} path={'/store'}/>
                    </div>
                  </div>
                  {/* Img Section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.image}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 lg:scale-115 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
