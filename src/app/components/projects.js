import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Image from "next/image";
import ProjectCard from "./projectCard";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Projects = () => {
  return (
    <div className="w-9/12 mx-auto md:w-full">
      <motion.div
        className="flex"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full overflow-auto md:h-full my-10 md:my-0 gap-5 md:gap-5 rounded-lg p-5">
          <ProjectCard
            name="muse"
            desc="music recommendation powered by Spotify and AI"
            link="https://muse-roan.vercel.app/"
          />
          <ProjectCard
            name="zen"
            desc="task management iOS app"
            link="https://github.com/kggurram/zen"
          />
          <ProjectCard
            name="droneline"
            desc="autonomous drone line detection"
            link="https://github.com/kggurram/autonomous-drone"
          />
          <ProjectCard
            name="R2-D2"
            desc="Discord's very own astromech droid"
            link="https://github.com/kggurram/R2-D2"
          />
          <ProjectCard
            name="birdie"
            desc="CV models for bird detection and segmentation"
            link="https://github.com/kggurram/bird-recognition"
          />
          <ProjectCard
            name="klue"
            desc="UI clone of the Netflix home page"
            link="https://klue-gray.vercel.app/"
          />
          <ProjectCard
            name="spotify-dbms"
            desc="database management application developed for CPS510"
            link="https://github.com/kggurram/spotify-dbms"
          />
          <ProjectCard
            name="bookie"
            desc="bookstore application developed for COE528"
            link="https://github.com/kggurram/bookie"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
