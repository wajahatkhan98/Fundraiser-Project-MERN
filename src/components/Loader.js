import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
};
const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: '#FF0000',
  borderRadius: '0.5rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '60%',
  },
};
const loadingCircleTransition = {
  duration: 0.8,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loader = () => {
  return (
    <div>
      <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
          transition={{ duration: 0.5 }}
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
