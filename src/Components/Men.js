import React from "react";
import Formen from "../Assets/Formen.jpg";
import MenPhant1 from "../Assets/MenPhant_1.jpg";

const Men = () => {
  const data = [{ imgurl: MenPhant1, cardLabel: "Printed Chiffon Dress" }];

  return (
    <>
      <div className="flexdircolumn justifycontent_spaceEven">
        <div className="marginleft2">
          <div>MEN</div>
          <br />
          <hr className="singleLine"></hr>
        </div>
        <div className="clickhereCard">
          <div className="displayflex justifycontent_Center alignItemCenter whitefont">
            <img className="clickhereCardimg" src={Formen} />
            <h4 className="clickhereCardContent flexdircolumn homemsg fontfammono">
              <button className="clickhereCardbtn whitefont">Click here</button>
            </h4>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Men;
