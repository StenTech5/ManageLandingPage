import React from 'react';
import { assets } from '../assets/assets';
import Button from './Button';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex items-center w-full py-8 lg:py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-DarkBlue leading-tight mb-4">
            Bring everyone together to build better products.
          </h1>
          <p className="text-DarkGrayishBlue text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <Button />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={assets.illustration_intro}
            alt="dashboard graphics"
            className="w-full max-w-lg object-contain"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
