import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "MEDIUM" | "LARGE" | "SMALL";
}

const Section: React.FC<Props> = ({ children, className = "", size = "MEDIUM" }) => {
  const getSizeClassName = () => {
    switch (size) {
      case "SMALL":
        return "min-h-[30vh]";
      case "MEDIUM":
        return "min-h-[50vh]";
      case "LARGE":
        return "min-h-[80vh]";
      default:
        return "";
    }
  };

  const sectionClassName = `${getSizeClassName()} ${className}`;

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
};

export default Section;
