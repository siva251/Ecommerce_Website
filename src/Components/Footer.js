import React from "react";
import storelogo from "../Assets/store.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const infoData = [
    { name: "Careers" },
    { name: "Investor Relation" },
    { name: "press Releases" },
    { name: "shop with points" },
  ];
  const customerCareData = [
    { name: "Returns" },
    { name: "Shipping Info" },
    { name: "Gift Cards" },
    { name: "Size Guide" },
  ];

  return (
    <>
      <hr />
      <div className="displayflex">
        <div className="width_50 paddingleft2">
          <img className="padding1" src={storelogo} />
          <p className="desc">
            Vestibulum sagittis, nisl nec pellen- tesque suscipit, arcu nisi
            maximus neque, vitae finibus erat odio eu lacus. Curabitur malesuada
            erat eros, quis dignissim dui accumsan id. Cras non imperdiet metus.
            Sed nec turpis nec.
          </p>
        </div>
        <div className="width_100 padding1 ">
          <div className="alignItemCenter justifycontent_Center">
            <h3 className="fontfammono">SIGN UP FOR OUR NEWSLETTER !</h3>
            <span className="paddingleft2">
              <input
                type="text"
                placeholder=" hello@psdfreebies.com "
                className="greycolorbg"
                style={{ height: "35px" }}
              />
              <button className="clickhereCardbtn">Submit</button>
            </span>
          </div>
          <br />
          <hr />
          <div className="displayflex justifycontent_spaceEven">
            <div style={{ marginTop: "1%" }}>
              <span className="boldfont">INFORMATION</span>
              <div>
                <br />
                {infoData.map((values, index) => (
                  <div key={index} className="displayflex">
                    <ArrowRightIcon />
                    {values.name}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "1%" }}>
              <span className="boldfont">CUSTOMER CARE</span>
              <div>
                <br />
                {customerCareData.map((values, index) => (
                  <div key={index} className="displayflex">
                    <ArrowRightIcon />
                    {values.name}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "1%" }}>
              <span className="boldfont">STORE INFORMATION</span>
              <br />
              <div style={{ marginTop: "5%" }}>
                <div className="displayflex">
                  <LocationOnIcon /> Address : Lorem ipsum dolor sit amet,
                  Onsectetuer adipiscing elit.
                </div>
                <div className="displayflex">
                  <EmailIcon /> Email : demo@postheme.com
                </div>
                <div className="displayflex">
                  <PhoneIcon /> Phone : 0987654321
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <div className="justifycontent_Center alignItemCenter">
        <CopyrightIcon />
        2015 Psdfreebies, All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
