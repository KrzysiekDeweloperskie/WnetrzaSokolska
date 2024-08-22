import { cn } from "@/lib/utils";
import React from "react";
import { FiFacebook } from "react-icons/fi";

interface FacebookRedirectProps {
  className?: string;
  link?: string;
}

const FacebookRedirect = ({
  className,
  link = "https://www.facebook.com/people/Wn%C4%99trza-Deweloperskie/61564077804403",
}: FacebookRedirectProps) => {
  return (
    <a
      aria-label="Odwiedź nasze konto na Facebook"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
    >
      <FiFacebook className="header-icon-graphic" />
    </a>
  );
};

export default FacebookRedirect;