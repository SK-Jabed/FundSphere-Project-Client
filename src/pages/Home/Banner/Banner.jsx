import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/Nnm7gK5/69-1.jpg",
      title: "Empower Your Vision",
      description:
        "Every great idea starts with a spark of inspiration, but to make it a reality, you need support. FundSphere is your trusted partner in transforming dreams into achievements. Launch your crowdfunding campaign and connect with a global community of backers who believe in your vision. Start your journey with us today and watch your vision come to life!",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/r20cBJK/10820.jpg",
      title: "Together, We Make a Difference",
      description:
        "Imagine a world where every idea, big or small, gets the chance it deserves.  is more than just a platform; it's a movement where individuals unite to bring meaningful projects to life. From supporting social causes and community initiatives to funding innovative technologies. Join us today and discover how your involvement can make dreams come true and leave a lasting impact on the world.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/K64XCwm/16543-1.jpg",
      title: "Fuel Innovation, Inspire Change",
      description:
        "Innovation is the heartbeat of progress, but even the brightest ideas need a strong foundation of support. At FundSphere, we champion creators, entrepreneurs, and visionaries by providing a platform where ideas can take flight. Together, we can drive change, spark innovation, and inspire the world to move forward.",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/zhWRT5Y/128101-1.jpg",
      title: "Your Cause, Our Platform",
      description:
        "Every story deserves to be told, and every cause deserves to be supported. At Crowdcube, we empower you to share your passion and raise funds for what truly matters. From humanitarian efforts and educational projects to personal aspirations and small businesses. Your cause is our mission—let’s make it happen together.",
    },
  ];

  return (
    <div className="container w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        className="h-[300px] md:h-[350px] lg:h-[530px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative"
              data-aos="fade-up" // Animation type
              data-aos-duration="1500" // Custom animation duration
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center bg-center bg-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
                <div
                  className="max-w-lg bg-white bg-opacity-80 p-4 rounded-lg shadow-lg hidden md:block"
                  data-aos="fade-right" // Another animation type
                >
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
