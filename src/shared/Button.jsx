import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, bgColor, textColor, path, handler }) => {
  return (
    <Link
      to={path}
      className={`${bgColor} ${textColor} cursor-pointer hover:bg-secondary duration-300 py-2 px-8 rounded-full relative z-5 inline-block`}
      onClick={handler}
    >
      {text}
    </Link>
  );
};

export default Button;
