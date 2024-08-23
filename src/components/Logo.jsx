import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center gap-3
     "
    >
      <img src={logoSvg} alt="CryptoBucks" className="w-7" />
      <span>CryptoPulse</span>
    </Link>
  );
};

export default Logo;
