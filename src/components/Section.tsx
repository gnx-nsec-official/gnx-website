import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
    size?: "MEDIUM" | "LARGE";
}

const Section = ({ children, className = "", size = "MEDIUM" }: Props) => {
    return (
        <section className={`${size === "MEDIUM" ? "min-w-[50vh]" : "min-w-[80vh]"} ${className}`}>
            {children}
        </section>
    );
}

export default Section;
