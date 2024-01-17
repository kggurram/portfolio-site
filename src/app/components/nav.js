"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "./splitText";

const Nav = () => {
  return (
    <div className="flex justify-center space-x-20 my-20 font-bold">
      <SplitText
        className=""
        initial={{ y: "100%" }}
        animate="visible"
        variants={{
          visible: (i) => ({
            y: -4,
            transition: {
              delay: i * 0.05,
            },
          }),
        }}
      >
        home
      </SplitText>
      <SplitText
        className=""
        initial={{ y: "100%" }}
        animate="visible"
        variants={{
          visible: (i) => ({
            y: -4,
            transition: {
              delay: i * 0.05,
            },
          }),
        }}
      >
        projects
      </SplitText>
      <SplitText
        className=""
        initial={{ y: "100%" }}
        animate="visible"
        variants={{
          visible: (i) => ({
            y: -4,
            transition: {
              delay: i * 0.05,
            },
          }),
        }}
      >
        posts
      </SplitText>
    </div>
  );
};

export default Nav;
