import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-red-secondary" />
          <div className="w-1 h-40 sm:h-80 red-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi!, I'm <span className="text-red-secondary">Abraham</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm new in the world of 3D visuals, but <br className="hidden sm:block" />I develop web applications since 2020
          </p>
        </div>

      </div>

        <ComputersCanvas />
        
    </section>
  )
}

export default Hero
