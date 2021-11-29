import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import MenuBtn from "./MenuBtn";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navigation">
      <Navbar />
      <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidemenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navigation;
