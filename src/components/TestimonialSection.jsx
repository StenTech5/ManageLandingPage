import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { testimonialsData } from '../assets/assets';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSwipe = (direction) => {
    if (direction === 'LEFT') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    } else if (direction === 'RIGHT') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="text-center p-8 bg-white relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-24 text-DarkBlue"
      >
        What they’ve said
      </motion.h2>

      {/* Desktop & Tablet View */}
      <motion.div
        className="hidden md:grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative bg-LightGray rounded-lg shadow-lg 
              pt-10 pb-8 px-4
              md:h-[300px] md:w-[85%] md:mx-auto md:pt-10 md:pb-6 md:px-6 md:mb-4
             xl:h-auto xl:w-auto xl:pt-12 xl:px-6"
            variants={cardVariants}
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-16 h-16 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-white"
            />
            <h3 className="font-bold text-DarkBlue mt-6">{testimonial.name}</h3>
            <p className="text-DarkGrayishBlue mt-2 text-sm md:text-base">{testimonial.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View with Swipe */}
      <motion.div
        {...swipeHandlers}
        className="md:hidden relative w-full max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          key={currentIndex}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-LightGray p-10 rounded-lg shadow-lg pt-20 relative w-full"
        >
          <img
            src={testimonialsData[currentIndex].image}
            alt={testimonialsData[currentIndex].alt}
            className="w-24 h-24 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white"
          />
          <h3 className="font-bold text-DarkBlue mt-6">
            {testimonialsData[currentIndex].name}
          </h3>
          <p className="text-DarkGrayishBlue mt-4 text-lg">
            {testimonialsData[currentIndex].text}
          </p>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2 mb-12">
          {testimonialsData.map((_, index) => (
            <FaCircle
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer text-xs transition-transform duration-200 hover:scale-125 ${
                index === currentIndex ? 'text-orange-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <button className="text-white mb-24 bg-BrightRed px-5 py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 rounded-full cursor-pointer hover:bg-BrightRed2 shadow-lg transition ease-in-out duration-300 text-sm lg:text-base">
        Get Started
      </button>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;


