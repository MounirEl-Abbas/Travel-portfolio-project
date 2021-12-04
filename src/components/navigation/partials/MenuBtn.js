import React from "react";
import { FiMenu, ImCross } from "../../../assets";

const MenuBtn = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="menu-btn">
      {isMenuOpen ? (
        <ImCross
          onClick={() => setIsMenuOpen(false)}
          className="menu-btn-cross"
        />
      ) : (
        <FiMenu onClick={() => setIsMenuOpen(true)} />
      )}
    </div>
  );
};

export default MenuBtn;
