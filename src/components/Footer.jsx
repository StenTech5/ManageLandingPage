import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Upper Section */}
      <motion.div
        className="bg-BrightRed py-16 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg">
            Simplify how your team works today.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-BrightRed px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-80 mt-6"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Lower Section */}
      <div className="container mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Social Icons */}
        <motion.div
          className="flex flex-col space-y-6 items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={assets.logo} alt="Manage Logo" className="w-40" />
          <motion.div
            className="flex space-x-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[
              assets.icon_facebook,
              assets.icon_youtube,
              assets.icon_twitter,
              assets.icon_pinterest,
              assets.icon_instagram,
            ].map((icon, idx) => (
              <motion.img
                key={idx}
                src={icon}
                alt="social"
                className="w-6"
                whileHover={{ scale: 1.2 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Middle Section - Navigation Links */}
        <motion.div
          className="grid grid-cols-2 gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            ['Home', 'Pricing', 'Products', 'About Us'],
            ['Careers', 'Community', 'Privacy Policy'],
          ].map((group, idx) => (
            <ul key={idx} className="space-y-2">
              {group.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-BrightRed transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>

        {/* Right Section - Newsletter Signup */}
        <motion.div
          className="flex flex-col items-center md:items-end space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="flex-grow px-4 py-3 text-black rounded-full outline-none bg-white"
            />
            <button className="bg-BrightRed px-6 py-3 text-white font-bold rounded-full ml-2 hover:bg-red-500">
              Go
            </button>
          </form>
          <p className="text-gray-400 text-sm">
            Copyright 2020. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
