import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Goquicklyto = () => {
  const data = [
    { dataName: "Women", dataColon: ":" },
    { dataName: "Men", dataColon: ":" },
    { dataName: "Accessories", dataColon: ":" },
    { dataName: "Fashion", dataColon: ":" },
    { dataName: "Features", dataColon: ":" },
    { dataName: "Clothing", dataColon: ":" },
    { dataName: "Bags and Wallets", dataColon: ":" },
    { dataName: "Fragrances", dataColon: ":" },
    { dataName: "Caps & Hats" },
  ];
  return (
    <>
      <div className="displayflex justifycontent_Center alignItemCenter">
        <span className="displayflex alignItemCenter paddingRight1">
          Go Quickly To{" "}
        </span>
        <ArrowCircleRightIcon />
        {data.map((value, index) => (
          <div key={index} className="padding1">
            {value.dataName}
            <span className=""> {value.dataColon}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Goquicklyto;
