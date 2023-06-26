import React from "react";
import clsx from "clsx";
import UnstyledLink from "../Links/UnstyledLink";

const Button = ({ children, to, target }) => {
  return (
    <button className="bg-white border-2 rounded py-2 px-4 font-bold text-black hover:bg-gray-100 mt-4">
      {/* <a href={to}>{children}</a> */}
      <UnstyledLink to={to} target={target}>
        {children}
      </UnstyledLink>
    </button>
  );
};

export default Button;
