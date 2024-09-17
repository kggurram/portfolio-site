"use client";

import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ArticleIcon from "@mui/icons-material/Article";

const footer = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="lg:flex w-full text-xl h-fit justify-center p-10 pb-10 md:pb-20 md:p-10 lg:p-20 space-y-3 lg:space-y-0 lg:space-x-8 xl:space-x-16 text-slate-700"
    >
      <div className="flex justify-start space-x-3 w-fit mx-auto lg:mx-0">
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
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="text-lg">made in Toronto</div>
      </div>
      <div className="flex justify-center w-fit mx-auto lg:w-fit">
        <ul className="flex justify-center space-x-4 ">
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="/resume.pdf">
              <ArticleIcon />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://github.com/kggurram">
              <GitHubIcon />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://linkedin.com/in/kggurram">
              <LinkedInIcon />
            </a>
          </li>
          <li className="hover:scale-110 hover:text-teal-400 duration-200 ease-out">
            <a target="_blank" href="https://twitter.com/gxrram">
              <XIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-teal-900 w-fit italic mx-auto text-lg">
        escape the ordinary
      </div>
    </motion.div>
  );
};

export default footer;
