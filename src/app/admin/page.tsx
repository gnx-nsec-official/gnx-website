"use client"

import React from "react";
import OptionCard from "@/components/OptionCard";

const Admin = () => {
  const data = [
    { href: "/upload", innerText: "Upload Images" },
    { href: "/event", innerText: "Add Events" },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/3">
        {data.map((item, index) => (
          <OptionCard
            innerText={item.innerText}
            href={item.href}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
