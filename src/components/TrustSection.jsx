import BookIcon from "../assets/book.png";
import MobileIcon from "../assets/mobile.png";
import HandShake from "../assets/handshake.png";
import TickIcon from "../assets/tick.png";

const trustSection = [
  { icon: BookIcon, description: "No Hassle Of Paperwork" },
  { icon: MobileIcon, description: "Compare Free Quotes From 20+ Insurers" },
  { icon: HandShake, description: "Dedicated Relationship Manager^^" },
  { icon: TickIcon, description: "Claims Assistance" },
];

const TrustSection = () => {
  return (
    <div className="trust_container">
      <div className="trust_card_wrapper">
        <h2 className="trust_card_title">Here's why people trust us!</h2>
        {trustSection.map((card, idx) => (
          <div className="trust_card" key={card?.description}>
            <div
              className="trust_card_icon_wrapper"
              style={{ width: idx === trustSection?.length - 1 ? "7rem" : "" }}
            >
              <img src={card.icon} alt="" />
            </div>
            <p className="trust_card_description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
