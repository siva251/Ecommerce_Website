import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const data = [
    { navName: "HOME" },
    { navName: "SHOP" },
    { navName: "FEATURES" },
    { navName: "MEGA GROUP" },
    { navName: "ABOUT" },
    { navName: "BLOG" },
    { navName: "CONTACT" },
  ];
  return (
    <>
      <div className="displayflex justifycontent_Center alignItemCenter navbar blackColorbg">
        {data.map((navData, index) => (
          <div key={index} className="padding1 navelement">
            <NavLink to="/" className="navtext whitefont">
              {navData.navName}
            </NavLink>
          </div>
        ))}
        <span className="displayflex justifycontent_Center alignItemCenter redColorbg whitefont padding1">
          <ShoppingCartIcon /> Shopping Cart (0)
        </span>
      </div>
    </>
  );
};

export default Navbar;
