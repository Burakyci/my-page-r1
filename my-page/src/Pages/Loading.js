import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div>
      <h1>
        {/* <motion.div
          animate={{
            rotate: [
              10, -10, 20, -20, 30, -30, 50, -50, 90, -90, 120, -120, 150, -150,
              190, -190, 250, -250, 300, -300, 360, -360, 500, -500, 600, -600,
              800, -800,
            ],

            scale: [1, 1.5, 1],
          }}
          transition={{
            ease: "easeInOut",
            duration: [10],
            repeat: Infinity,
          }}
          className="loading"
        ></motion.div> */}
        <motion.div
          className="loadingTwo"
          animate={{ rotate: 140000 }}
          transition={{
            ease: "easeInOut",
            duration: 50,
            repeat: Infinity,
          }}
        ></motion.div>
      </h1>
    </div>
  );
}

export default Loading;
