"use client";

import React from "react";
import { SplitText } from "./splitText";

const Nav = () => {
  return (
    <div className="flex w-full h-fit justify-center space-x-20 font-bold py-20">
      <SplitText
        className="hover:scale-110 hover:text-teal-400 duration-200 ease-out"
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
        about
      </SplitText>
      <SplitText
        className="hover:scale-110 hover:text-teal-400 duration-200 ease-out"
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
        className="hover:scale-110 hover:text-teal-400 duration-200 ease-out"
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
        thoughts
      </SplitText>
    </div>
  );
};

export default Nav;
