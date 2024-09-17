import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <motion.div
        className="flex"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.4 }}
      >
        <div className="sm:p-12 sm:w-full md:w-full lg:w-full xl:w-10/12 2xl:w-10/12 md:p-20 p-14 mx-auto  border-zinc-900 md:rounded-xl">
          <div className="text-6xl font-bold tracking-widest flex">
            hi, i&apos;m karthik.
          </div>

          <p className="text-2xl pt-8">
            i&apos;m a software engineer based in Toronto keen on fullstack
            development, ML, and building creative projects that matter
          </p>
          <div className="pt-8 w-fit hover:scale-105 duration-200 ease-out">
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-xl decoration-3 underline underline-offset-8 decoration-teal-400"
            >
              paper thing for recruiters
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
