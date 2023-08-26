import React from 'react';

interface Props {
    children: React.ReactNode
    className?: string
}

const Section = ({ children, className="" }: Props) => {
    return (
        <section className={`min-h-[88vh] ${className}`}>
            {children}
        </section>
    )
}

export default Section