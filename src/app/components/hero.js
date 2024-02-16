import React from "react";
import { SplitText } from "./splitText";
import { AnimatePresence, motion } from "framer-motion";
import { Button, duration } from "@mui/material";

const Hero = () => {
  return (
    <div className="w-full">
      <motion.div
        className="flex"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-2/3 p-20">
          <SplitText
            className="text-6xl font-bold tracking-widest"
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
            hi, i'm karthik.
          </SplitText>

          <div className="text-2xl pt-8">
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
              i'm a software engineer based in Toronto keen on fullstack
              development, ML, and building creative projects that matter
            </SplitText>
          </div>
          <div className="pt-8 w-fit hover:scale-105 duration-200 ease-out">
            <a
              href="/Karthik Gurram - Resume.pdf"
              target="_blank"
              className="font-bold decoration-3 underline underline-offset-8 decoration-teal-400"
            >
              paper thing for recruiters
            </a>
          </div>
        </div>
        <div className="flex w-1/3 justify-center my-auto">image/art</div>
      </motion.div>
    </div>
  );
};

export default Hero;
