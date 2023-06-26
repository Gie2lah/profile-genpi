import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";
import React from "react";

export type UnstyledLinkProps = {
  to: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "to">;
} & React.ComponentPropsWithRef<"a">;

export default function UnstyledLink({
  children,
  to,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : to && !to.startsWith("/") && !to.startsWith("#");

  if (!isNewTab) {
    return (
      <Link to={to}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        className={clsx(className, "cursor-newtab")}
      >
        {children}
      </a>
    </>
  );
}
