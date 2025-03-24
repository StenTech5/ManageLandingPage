import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <nav className={`sticky top-0 z-50 bg-white w-full transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}> 
      <div className="flex justify-between items-center px-6 py-6 sm:px-8 md:px-10 lg:px-20 xl:px-32 md:py-8">
        <img
          src={assets.logo}
          className="cursor-pointer w-[130px] sm:w-[150px] h-auto"
          alt="logo"
        />
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-10 flex-1 justify-center">
          <ul className="flex gap-4 xl:gap-8 2xl:gap-10 text-DarkBlue font-medium text-sm lg:text-base">
            <li><a href="#Pricing" className="hover:text-DarkGrayishBlue transition">Pricing</a></li>
            <li><a href="#Product" className="hover:text-DarkGrayishBlue transition">Product</a></li>
            <li><a href="#About" className="hover:text-DarkGrayishBlue transition">About Us</a></li>
            <li><a href="#Careers" className="hover:text-DarkGrayishBlue transition">Careers</a></li>
            <li><a href="#Community" className="hover:text-DarkGrayishBlue transition">Community</a></li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button />
        </div>
        <div className="lg:hidden">
          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.icon_hamburger}
            className="w-7 cursor-pointer"
            alt="menu"
          />
        </div>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-PaleRed bg-opacity-50 flex justify-center items-start pt-20 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-md w-[95%] py-6 flex flex-col items-center relative min-h-[350px] max-w-sm"
            >
              <img
                onClick={() => setShowMobileMenu(false)}
                src={assets.icon_close}
                className="w-6 absolute top-4 right-5 cursor-pointer"
                alt="close"
              />
              <ul className="flex flex-col items-center gap-6 mt-4 text-lg font-bold text-DarkBlue">
                <li><a onClick={() => setShowMobileMenu(false)} href="#Pricing">Pricing</a></li>
                <li><a onClick={() => setShowMobileMenu(false)} href="#Product">Product</a></li>
                <li><a onClick={() => setShowMobileMenu(false)} href="#About">About Us</a></li>
                <li><a onClick={() => setShowMobileMenu(false)} href="#Careers">Careers</a></li>
                <li><a onClick={() => setShowMobileMenu(false)} href="#Community">Community</a></li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

