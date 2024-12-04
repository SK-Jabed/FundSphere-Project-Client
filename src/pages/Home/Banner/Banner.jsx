import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Banner.css"; // Custom styles if needed

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
      title: "Warm Winter Donations",
      description:
        "Winter is a season of joy and togetherness, but for many, it can also be a time of struggle and hardship. As the temperatures drop, face the harsh cold without the basic necessities to stay warm. The Warm Winter Donations initiative aims to bridge this gap by providing a platform for compassionate individuals to donate winter essentials, bringing comfort and hope to those in need.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/yW5qLbK/blankets-to-donate-jpg.webp",
      title: "Share the Warmth",
      description:
        "As the frosty chill of winter settles in, many of us are fortunate to enjoy the warmth of cozy sweaters, blankets, and heated homes. However, for countless individuals insufficient resources to stay warm. Share the Warmth is more than just a campaign—it’s a heartfelt call to action, inviting everyone to make a tangible difference in the lives of those facing the harsh realities of winter.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/5WfwpFP/clothing.webp",
      title: "Support Local Drives",
      description:
        "Winter is a time when the power of community becomes most evident. Support Local Drives is an initiative designed to inspire neighborhoods, workplaces, schools, and organizations to come together for a common purpose: ensuring no one in our community faces the cold alone. When you support these initiatives, you’re not just donating clothes.",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/GQcRTTK/clothes.jpg",
      title: "Volunteer to Help",
      description:
        "When you choose to volunteer, you’re not just offering your time—you’re offering hope, compassion, and a helping hand to those who need it most. The Volunteer to Help initiative invites individuals from all walks of life to join forces in delivering winter essentials to vulnerable communities. Volunteering is more than an act of kindness.",
    },
  ];

  return (
    <div className="bg-gray-50 container w-11/12 mx-auto mt-6 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        className="h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl"
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
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center bg-center"
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
