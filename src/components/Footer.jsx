import React from "react";
import FooterBanner from "../assets/banner1.png";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="banner_wrapper">
        <img src={FooterBanner} alt="footer_banner" />
      </div>
      <p className="footer_description">
        <span>Disclaimer: </span>
        PhonePe Insurance Broking Services Private Limited. (IRDAI Reg. 766-
        Direct Broker – Life and General)- valid till 10/8/2027.CIN-
        U66000KA2020FTC132814. Reg. office - Office-2, Floor 4, Wing A,
        Salarpuria Softzone, Bellandur, Bengaluru, Karnataka-560103. Please read
        the sales brochure of the respective insurer carefully before concluding
        a sale. BN/1455 *Shop Insurance, Accident Insurance, International
        Travel Insurance: Group Insurance for PhonePe customers only. Subject to
        receipt of necessary details by the respective Insurer as per its
        underwriting practices.<br/> ^^A relationship manager is provided for Health
        insurance products only.
      </p>
      <p className="footer_bottom_label">Buy Insurance</p>
    </footer>
  );
};

export default Footer;
