import { FaArrowRight } from "react-icons/fa";
import HouseIcon from "../assets/house.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const carouselContent = [
  {
    icon: HouseIcon,
    label: "16K+",
    description: "Shops insured*",
    route: "https://phone.com",
  },
  {
    icon: HouseIcon,
    label: "15L+",
    description: "Users insured against Accidents*",
    route: "https://phone.com",
  },
  {
    icon: HouseIcon,
    label: "85K+",
    description: "International Trips* insured",
    route: "https://phone.com",
  },
];

const ShopSection = () => {
  return (
    <div className="shop_container">
      <div className="carousel_wrapper">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={50}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay]}
        >
          {carouselContent?.map((plan) => (
            <SwiperSlide key={plan?.label + plan?.description}>
              <div className="carousel_card">
                <div className="carousel_icon_wrapper">
                  <img
                    src={plan?.icon}
                    alt="carousel_icon"
                    className="carousel_icon"
                  />
                </div>
                <h3 className="carousel_plan_title">{plan.label}</h3>
                <p className="carousel_plan_description">{plan?.description}</p>
                <a href="/" className="carousel_plan_button">
                  Check Plans <FaArrowRight className="right_arrow" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopSection;
