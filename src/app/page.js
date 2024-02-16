"use client";

import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { SplitText } from "./components/splitText";
import {
  motion,
  useMotionValue,
  AnimatePresence,
  useSpring,
  animate,
} from "framer-motion";
import { useState, useEffect } from "react";

// const Cursor = (props) => {
//   const cursorX = useMotionValue(-1000);
//   const cursorY = useMotionValue(-1000);

//   const springConfig = {
//     damping: 35,
//     stiffness: 700,
//     mass: 1,
//   };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <motion.div
//       style={{
//         translateX: cursorXSpring,
//         translateY: cursorYSpring,
//       }}
//       className="z-[99999] w-0 h-0 bg-teal-400"
//     >
//       <motion.div
//         layoutId="cursor"
//         className="w-3 h-3 bg-teal-400 pointer-events-none rounded-full"
//       ></motion.div>
//     </motion.div>
//   );
// };

export default function Home() {
  // const [magnetActive, setMagnetActive] = useState(false);

  return (
    <>
      {/* <Cursor hideCursor={magnetActive} /> */}
      <div className="w-screen h-screen bg-zinc-950 text-white tracking-widest">
        <div className="w-3/5 h-full m-auto flex flex-wrap">
          <Nav></Nav>
          <Hero></Hero>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
