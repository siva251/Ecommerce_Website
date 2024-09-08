import React from "react";
import storeImg from "../Assets/store.png";
import { red } from "@mui/material/colors";
import PageviewIcon from "@mui/icons-material/Pageview";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Header = () => {
  return (
    <>
      <div className="justifycontent_spaceEven">
        <div className="paddingright10 borderrigth alignItemCenter">
          <ShoppingCartIcon />
          FREE SHIPPING ON ALL ORDER
        </div>
        <div className="paddingright10 borderrigth alignItemCenter">
          <LocalAtmIcon />
          100% MONEY BACK GUARANTEE
        </div>
        <div className="alignItemCenter">
          <ScheduleIcon />
          ONLINE SUPPORT 24/7
        </div>
      </div>
      <hr />
      <div className="header">
        <div className="fashionStoreImg">
          <img src={storeImg} style={{ width: "60%", padding: "10px 0 0 0" }} />
        </div>
        <div className="header_icons">
          <div className="displayflex borderpadding6px">
            <div className="search">
              <input
                type="text"
                placeholder=" Search "
                style={{ border: "none" }}
              />
            </div>
            {"|"}
            <div>
              <select style={{ border: "none" }}>
                <option value="volvo">All Categories</option>
              </select>
            </div>
          </div>
          <PageviewIcon
            className="socialmediaIcon"
            sx={{ color: red[700], fontSize: 50 }}
          />
          <FacebookIcon className="socialmediaIcon" />
          <TwitterIcon className="socialmediaIcon" />
          <InstagramIcon className="socialmediaIcon" />
          <YouTubeIcon className="socialmediaIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;
