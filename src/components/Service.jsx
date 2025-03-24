import React from 'react';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <div>
      <section className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 mb-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column with animation */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-DarkBlue mb-6">
              What’s different about Manage?
            </h2>
            <p className="text-DarkGrayishBlue max-w-md mx-auto lg:mx-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </motion.div>

          {/* Right Column with staggered animation */}
          <motion.div
            className="flex-1 flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Block 1 */}
            <motion.div
              className="flex items-start gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="bg-BrightRed text-white px-4 py-2 rounded-full font-bold">
                01
              </span>
              <div>
                <h3 className="text-DarkBlue font-bold mb-2">
                  Track company-wide progress
                </h3>
                <p className="text-DarkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              className="flex items-start gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="bg-BrightRed text-white px-4 py-2 rounded-full font-bold">
                02
              </span>
              <div>
                <h3 className="text-DarkBlue font-bold mb-2">
                  Advanced built-in reports
                </h3>
                <p className="text-DarkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              className="flex items-start gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="bg-BrightRed text-white px-4 py-2 rounded-full font-bold">
                03
              </span>
              <div>
                <h3 className="text-DarkBlue font-bold mb-2">
                  Everything you need in one place
                </h3>
                <p className="text-DarkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service;
