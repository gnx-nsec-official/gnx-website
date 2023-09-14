import React, { ReactNode } from "react";

type HeadingLevel = "LARGE" | "SMALL" | "MEDIUM";

interface Props {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const Heading = ({ children, className="", level = "MEDIUM" }: Props) => {
  const headingClassName = () => {
    switch (level) {
      case "SMALL":
        return "text-xl";
      case "MEDIUM":
        return "text-3xl";
      case "LARGE":
        return "text-9xl";
      default:
        return "";
    }
  };

  return (
    <span className={`font-bold ${headingClassName()} ${className}`}>
      {children}
    </span>
  );
};

export default Heading;
