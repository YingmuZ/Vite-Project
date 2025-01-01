import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MouseHover({ img }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  // Handle mouse move to update position
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Add a new tile to the trail on each mouse move
    const newTile = {
      x: e.clientX,
      y: e.clientY,
      id: Math.random(), // Unique ID for each tile
    };

    setTrail((prev) => [...prev, newTile]);
  };

  // Remove old tiles after a short period
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1)); // Remove the oldest tile
    }, 30); // Remove tile every 100ms

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "none";
    };
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Prevent blocking user interactions
        zIndex: 9999, // Ensure the icon is on top
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <img
          className="rounded-full"
          src={img}
          alt="Mouse follower"
          width="50"
          height="50"
        />
      </motion.div>

      {trail.map((tile) => (
        <motion.div
          key={tile.id}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 0.5,
            scale: 0.5,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            top: tile.y,
            left: tile.x,
            width: "50px",
            height: "50px",
            backgroundColor: "black",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

export default MouseHover;
