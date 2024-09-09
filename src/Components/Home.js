import React from "react";
import HomeBG from "../Assets/HomeBG.jpg";
import Navbar from "./Navbar";
import Goquicklyto from "./GoQuicklyTo";
import Card from "./Card";
import { motion } from "framer-motion";
import FromTheBlog from "../Components/JsonData/FromtheBlog.json";
import WomenjsonData from "../Components/JsonData/Women.json";
import NewArrivaljsonData from "../Components/JsonData/NewArrival.json";
import MenjsonData from "../Components/JsonData/Men.json";
import Formenwomentcard from "./ForMenWomenCard";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <Navbar />
      {console.log("skkk...came into Home.js")}
      {/* <div
        className="HomeRoot"
        style={{
          backgroundImage: `url(${HomeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            textAlign: "center",
            width: "100vw",
          }}
        >
          <div className="header alignItemCenter">
            <CiCircleChevLeft size={70} />
            <div>
              <h3>NEW !</h3>
              <h1 className="homemsg">COLLECTION 2016</h1>
              <h3 className="forParent">for</h3>
              <h2 className="homemsg">MEN & WOMEN</h2>
            </div>
            <CiCircleChevRight size={70} />
          </div>
        </div>
      </div>
      <Goquicklyto />
      <Card />
      <div>
        <div className="marginleft7 margintop_bottom_2 fontsize_LG">
          <motion.div
            initial={{ scale: 0, y: "100%" }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0 }}
            className="displayflex header"
          >
            <div>
              MEN
              <br />
              <hr className="singleLine"></hr>
            </div>
            <div style={{ width: "10vw" }}>
              <CiCircleChevLeft size={40} className="paddingRight1" />
              <CiCircleChevRight size={40} className="paddingRight1" />
            </div>
          </motion.div>
        </div>
        <div className="justifycontent_Center displayflex">
          {Object.values(MenjsonData).map((key, index) => (
            <div className="paddingRight1" key={index}>
              <Formenwomentcard {...key} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="marginleft7 margintop_bottom_2 fontsize_LG">
          <motion.div
            initial={{ scale: 0, y: "100%" }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0 }}
            className="displayflex header"
          >
            <div>
              WOMEN
              <br />
              <hr className="singleLine"></hr>
            </div>
            <div style={{ width: "10vw" }}>
              <CiCircleChevLeft size={40} className="paddingRight1" />
              <CiCircleChevRight size={40} className="paddingRight1" />
            </div>
          </motion.div>
        </div>
        <div className="justifycontent_Center displayflex">
          {Object.values(WomenjsonData).map((key, index) => (
            <div className="paddingRight1" key={index}>
              <Formenwomentcard {...key} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" margintop_bottom_2">
          <motion.div
            initial={{ scale: 0, y: "100%" }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0 }}
            className="justifycontent_spacearround"
          >
            <div>
              NEW ARRIVAL
              <br />
              <hr className="singleLine" style={{ width: "15vw" }}></hr>
            </div>
            <div>
              BEST SELLER
              <br />
              <hr className="singleLine" style={{ width: "15vw" }}></hr>
            </div>
            <div>
              POPULAR
              <br />
              <hr className="singleLine" style={{ width: "15vw" }}></hr>
            </div>
            <div style={{ width: "10vw" }}>
              <CiCircleChevLeft size={40} className="paddingRight1" />
              <CiCircleChevRight size={40} className="paddingRight1" />
            </div>
          </motion.div>
        </div>
        <div className="justifycontent_Center displayflex">
          {Object.values(NewArrivaljsonData).map((key, index) => (
            <div className="paddingRight1" key={index}>
              <Formenwomentcard {...key} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <motion.div
          initial={{ scale: 0, y: "100%" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: "0.50", delay: 0 }}
          className="marginleft7 margintop_bottom_2 fontsize_LG"
        >
          <div>FROM THE BLOG</div>
          <br />
          <hr className="singleLine"></hr>
        </motion.div>
        <div className="justifycontent_spaceEven">
          {Object.values(FromTheBlog).map((key, index) => (
            <div className={key.RootclsName ? key.RootclsName : ""} key={index}>
              <Formenwomentcard {...key} />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Home;
