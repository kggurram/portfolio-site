"use client";

import React from "react";

const footer = () => {
  return (
    <div className="flex justify-center m-20 p-6">
      <div className="flex justify-start  space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="16"
          fill="none"
          viewBox="0 0 7 16"
          className="dark:fill-silver-dark m-auto fill-white justify-center"
        >
          <path d="M3 6.5h1v61-.5 1-.5-1v-6z"></path>
          <path
            d="M3.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1-3a.5.5 0 100-1.5.5 0 000 1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>made in Toronto</div>
      </div>
      <div className="flex justify-end"></div>
      <div className="flex justify-center mx-auto">
        <ul className="flex justify-center space-x-24">
          <li>github</li>
          <li>linkedin</li>
          <li>twitter</li>
        </ul>
      </div>
      <div className="text-slate-500">escape the ordinary</div>
    </div>
  );
};

export default footer;
