"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  return (
    <div className="w-full h-fit mx-10">
      <motion.div
        className="flex w-full h-fit justify-center space-x-5 sm:space-x-10 py-10 md:py-20 text-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="hover:scale-125 text-teal-400 duration-200 ease-out">
          <Link href="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="hover:scale-110 hover:text-teal-400 duration-200 ease-out ">
          <Link href="/pages/projects">projects</Link>
        </div>
        {/* <div className="hover:scale-110 hover:text-teal-400 duration-200 ease-out ">
          <Link href="/pages/thoughts">thoughts</Link>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Nav;
