import React, { useState, useMemo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
function Particle() {
 const [init, setInit] = useState(false);
 useEffect(() => {
  initParticlesEngine(async (engine) => {
   await loadFull(engine);
  }).then(() => {
   setInit(true);
  });
 }, []);

 const particlesLoaded = (container) => {
  console.log(container);
 };
 const options = useMemo(
  () => ({
   interactivity: {
    events: {
     onClick: {
      enable: true,
      mode: "repulse",
     },
     onHover: {
      enable: true,
      mode: "bubble",
     },
    },
    modes: {
     bubble: {
      distance: 100,
      duration: 2,
      opacity: 0.2,
      size: 0,
     },
     repulse: {
      distance: 400,
      duration: 4,
     },
    },
   },
   particles: {
    color: { value: "#444" },
    shape: {
     type: "circle",
     polygon: { nb_sides: 5 },
    },
    move: {
     enable: true,
     speed: 0.3,
     direction: "none",
     random: true,
     straight: false,
     out_mode: "out",
     bounce: false,
    },
    number: {
     density: {
      enable: false,
     },
     value: 200,
    },
    size: {
     value: { min: 1, max: 4 },
     random: true,
     anim: {
      speed: 4,
      size_min: 0.3,
     },
    },
   },
  }),
  []
 );

 if (init) {
  return (
   <Particles
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={options}
   />
  );
 }
}

export default Particle;
