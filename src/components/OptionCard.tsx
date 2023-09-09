"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  innerText: string;
  href: string;
}

const OptionCard = (props: Props) => {
  return (
    <Link href={props.href}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="text-2xl m-2 p-4 bg-blue-100 rounded flex justify-between items-center"
      >
        {props.innerText}
        <ChevronRight />
      </motion.div>
    </Link>
  );
};

export default OptionCard;
