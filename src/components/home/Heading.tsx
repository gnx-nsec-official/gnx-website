import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  level?: "large" | "small" | "medium";
  className?: string
}

const Heading = ({ children, className, level="medium" }: Props) => {
  const headingClassName = level === "large" ? "font-lg" : "font-sm";

  return (
    <span className={`font-bold ${headingClassName} ${className}`}>
        {children}
    </span>
  )
}

export default Heading;
