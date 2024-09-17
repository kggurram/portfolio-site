"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectCard = (props) => {
  return (
    <a
      className="w-full relative h-full rounded-lg border border-zinc-900 p-4 text-3xl tracking-widest hover:scale-110 duration-200 ease-out hover:border-teal-400"
      href={`${props.link}`}
    >
      <div className="pb-10">
        <motion.div
          className="space-y-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="">{props.name}</p>
          <p className="text-xl desc-text text-slate-500">{props.desc}</p>
          <motion.div
            className="w-fit absolute bottom-3 right-3"
            initial={{ scale: 0 }}
            animate={{
              scale: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1.5,
                1.5, 1,
              ],
            }}
            transition={{ duration: 1 }}
          >
            <ArrowOutwardIcon className="text-teal-400" />
          </motion.div>
        </motion.div>
      </div>
    </a>
  );
};

export default ProjectCard;
