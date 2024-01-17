"use client";

import Image from "next/image";
import Nav from "./components/nav";
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

const Cursor = (props) => {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="z-[99999] w-0 h-0 bg-cyan-400"
    >
      {!props.hideCursor == true ? (
        <motion.div
          layoutId="cursor"
          className="w-3 h-3 bg-cyan-400 pointer-events-none rounded-full"
        ></motion.div>
      ) : null}
    </motion.div>
  );
};

export default function Home() {
  const [magnetActive, setMagnetActive] = useState(false);

  return (
    <>
      <Cursor hideCursor={magnetActive} />
      <div className="w-3/5 h-full mx-auto tracking-widest">
        <Nav></Nav>
        <div className="flex hero rounded-3xl">
          <div className="w-1/2 p-20">
            <SplitText
              className="text-5xl font-bold tracking-widest"
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
              karthik gurram
            </SplitText>

            <div className="text-lg pt-8">
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
                software engineer based in Toronto keen on fullstack
                development, ML, and building creative projects that matter
              </SplitText>
            </div>
          </div>
          <div className="flex w-1/2 justify-center my-auto">image/art</div>
        </div>
        <div className="p-20">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat venenatis urna, ut dignissim leo ornare et. Donec sed nunc
            interdum, commodo metus pharetra, varius dolor. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus volutpat venenatis
            urna, ut dignissim leo ornare et. Donec sed nunc interdum, commodo
            metus pharetra, varius dolor.
          </SplitText>
        </div>

        <div className="p-20">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat venenatis urna, ut dignissim leo ornare et. Donec sed nunc
            interdum, commodo metus pharetra, varius dolor. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus volutpat venenatis
            urna, ut dignissim leo ornare et. Donec sed nunc interdum, commodo
            metus pharetra, varius dolor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus volutpat venenatis urna, ut
            dignissim leo ornare et. Donec sed nunc interdum, commodo metus
            pharetra, varius dolor.
          </SplitText>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
