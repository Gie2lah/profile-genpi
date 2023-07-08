import React from "react";
import clsx from "clsx";
import UnstyledLink from "./UnstyledLink";

type TOCLinkprops = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

const TOCLink = ({ id, level, minLevel, text, activeSection }) => {
  return (
    <UnstyledLink
      to={"#${id}"}
      id={"link-${id}"}
      className={clsx(
        "font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200",
        "focus-visible:text-gray-700 dark:focus-visible:text-gray-200",
        activeSection === id
          ? "text-gray-900 dark:text-gray-100"
          : "text-gray-400 dark:text-gray-500"
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
};

export default TOCLink;
