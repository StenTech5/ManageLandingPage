import React from 'react';
import { motion } from 'framer-motion'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import Service from './components/Service';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full">
      <Navbar /> 
      <main className="pt-[60px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Header />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          <Service />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <TestimonialSection />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default App;
