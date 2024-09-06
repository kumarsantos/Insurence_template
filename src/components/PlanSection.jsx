import { FaArrowRight } from "react-icons/fa";
import HearIcon from "../assets/heart.png";
import PlusIcon from "../assets/plus.png";
import MotorBikeIcon from "../assets/motorbike.png";
import CarIcon from "../assets/car.png";

const planList = [
  {
    icon: HearIcon,
    label: "1.25L+",
    description: "Health plans purchased",
    route: "https://phone.com",
  },
  {
    icon: PlusIcon,
    label: "25K+",
    description: "Term Life plan purchased",
    route: "https://phone.com",
  },
  {
    icon: MotorBikeIcon,
    label: "70L+",
    description: "Bikes insured",
    route: "https://phone.com",
  },
  {
    icon: CarIcon,
    label: "13L+",
    description: "Cars insured",
    route: "https://phone.com",
  },
];

const PlanSection = () => {
  return (
    <div className="plan_container">
      {planList?.map((plan) => (
        <div key={plan?.label + plan?.description} className="card">
          <div className="icon_wrapper">
            <img src={plan?.icon} alt="plan_icon" className="plan_icon" />
          </div>
          <h3 className="plan_title">{plan.label}</h3>
          <p className="plan_description">{plan?.description}</p>
          <a href="/" className="plan_button">
            Check Plans <FaArrowRight className="right_arrow" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlanSection;
