import React from "react";
import { motion } from "framer-motion";
import Formen from "../Assets/Formen.jpg";
import MenPhant1 from "../Assets/MenPhant_1.jpg";
import MenPhant2 from "../Assets/MenPhant_2.jpg";
import womencoat from "../Assets/Womecoat.jpg";
import womenshots from "../Assets/Womeshots.jpg";
import Forwomen from "../Assets/Forwomen.jpg";
import WomenOvercoat from "../Assets/WomenOvercoat.jpg";
import Bag from "../Assets/bag.jpg";
import Womenovercoat2 from "../Assets/Womenovercoat2.jpg";
import shoe from "../Assets/shoe.jpg";
import Mencoat from "../Assets/Mencoat.jpg";
import handbag from "../Assets/handbag.jpg";
import MenwithBag from "../Assets/MenwithBag.jpg";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import StarRating from "./StarRating";

const Formenwomentcard = (props) => {
  const imagedata = {
    Formen: Formen,
    MenPhant1: MenPhant1,
    MenPhant2: MenPhant2,
    womencoat: womencoat,
    womenshots: womenshots,
    Forwomen: Forwomen,
    WomenOvercoat: WomenOvercoat,
    Bag: Bag,
    Womenovercoat2: Womenovercoat2,
    shoe: shoe,
    Mencoat: Mencoat,
    handbag: handbag,
    MenwithBag: MenwithBag,
  };

  return (
    <>
      <div>
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: "0.50", delay: 0 }}
          viewport={{ once: true }}
          className="formenwomencard"
        >
          {props.imgurl ? (
            <div className="formenwomencard">
              <img className="clickhereCardimg" src={imagedata[props.imgurl]} />
              {props.date ? (
                props.month ? (
                  <div
                    className={
                      props.calendarClsname ? props.calendarClsname : ""
                    }
                  >
                    <div className={props.dateclsname ? props.dateclsname : ""}>
                      {props.date}
                    </div>
                    <div
                      className={props.monthclsname ? props.monthclsname : ""}
                    >
                      {props.month}
                    </div>
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div className={props.dateclsname ? props.dateclsname : ""}>
                  {props.date}
                </div>
              )}
            </div>
          ) : null}
          {props.textmsg ? <div>{props.textmsg}</div> : null}
          {props.hr ? (
            <hr className="singleLine" style={{ width: "100%" }}></hr>
          ) : null}
          {props.description ? (
            <div className={props.clsName ? props.clsName : ""}>
              {props.description}
            </div>
          ) : null}
          <div className="header margintop1">
            <div className="displayflex flexdircolumn">
              {props.currencyIcon ? (
                <div className="displayflex alignItemCenter fontsize_LG flexdirrow">
                  <CurrencyPoundIcon />{" "}
                  {props.currencyValue ? props.currencyValue : null}
                </div>
              ) : null}
              {props.starRating ? <StarRating limit={5} rating={3} /> : null}
            </div>
            <div>
              <div className={props.clsName_title ? props.clsName_title : ""}>
                {props.cardtitle ? <div>{props.cardtitle}</div> : null}
              </div>
              {props.button ? (
                <button className={props.clsName ? props.clsName : ""}>
                  {props.button}
                </button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Formenwomentcard;
