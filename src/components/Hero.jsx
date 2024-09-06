import BannerImage from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="image_wrapper">
      <img src={BannerImage} alt="banner-img" className="banner_image" />
    </div>
  );
};

export default Hero;
