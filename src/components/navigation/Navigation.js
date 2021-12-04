import React, { useState } from "react";
import Navbar from "./partials/Navbar";
import Sidemenu from "./partials/Sidemenu";
import MenuBtn from "./partials/MenuBtn";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navigation">
      <Navbar />
      <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidemenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navigation;
