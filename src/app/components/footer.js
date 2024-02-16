"use client";

import React from "react";
import { motion } from "framer-motion";

const footer = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex w-full h-fit justify-center py-20 space-x-20 font-bold text-slate-700"
    >
      <div className="flex justify-start space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="16"
          viewBox="0 0 7 16"
          className="dark:fill-silver-dark m-auto fill-white justify-center"
        >
          <path fill="#334155" d="M3 6.5h1v61-.5 1-.5-1v-6z"></path>
          <path
            fill="#334155"
            d="M3.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1-3a.5.5 0 100-1.5.5 0 000 1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>made in Toronto</div>
      </div>
      <div className="flex justify-center mx-auto">
        <ul className="flex justify-center space-x-24">
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://github.com/kggurram">
              github
            </a>
          </li>
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://linkedin.com/in/kggurram">
              linkedin
            </a>
          </li>
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://twitter.com/gxrram">
              twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="text-slate-500">escape the ordinary</div>
    </motion.div>
  );
};

export default footer;
