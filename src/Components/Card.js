import React from "react";
import { motion } from "framer-motion";
import clothesSectionWomen from "../Assets/clothesSectionWomen.jpg";
import fotwareSectionWomen from "../Assets/footwareSectionWome.jpg";
import handbagSectionWomen from "../Assets/handbagSectionWomen.jpg";

const data = [
  { imgurl: clothesSectionWomen, cardLabel: "CLOTHES" },
  { imgurl: fotwareSectionWomen, cardLabel: "FOOTWEAR" },
  { imgurl: handbagSectionWomen, cardLabel: "HAND BAGS" },
];

const Card = () => {
  return (
    <>
      <div className="displayflex justifycontent_spaceEven">
        {data.map((value, index) => (
          <div key={index} className="clickhereCard">
            <motion.div
              initial={{ scale: 0, y: "100%" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: "0.50", delay: 0 }}
              className="displayflex justifycontent_Center alignItemCenter whitefont"
            >
              <img className="clickhereCardimg" src={value.imgurl} />
              <h4 className="clickhereCardContent flexdircolumn homemsg fontfammono">
                {value.cardLabel}
                <button className="clickhereCardbtn whitefont">
                  Click here
                </button>
              </h4>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
