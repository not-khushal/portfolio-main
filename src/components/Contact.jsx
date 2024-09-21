import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
  const handleArrowClick = () => {
    window.location.href = 'mailto:khaitankhushal28@gmail.com';
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8 flex flex-col justify-between">
      {/* Address Section */}
      <div className="flex flex-col md:flex-row justify-end space-x-4 mt-16 md:mt-32 pr-0 md:pr-56">
        <div>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="font-bold"
          >
            Address
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
          >
            Chennai
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
          >
            India
          </motion.p>
          <br />
          <div className="font-bold">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
            >
              <a
                href="https://www.instagram.com/not_so_khushal?igsh=MXF2dTU5YzEyZ3d5eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/khaitankhushal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="flex-grow flex items-center mt-24 md:mt-36">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1 }}
            className="text-xs md:text-sm mb-2"
          >
            Got something on mind?
          </motion.p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-black pb-2">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
              className="text-5xl md:text-8xl font-bold"
            >
              LET'S TALK
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1.8 }}
              onClick={handleArrowClick}
              className="focus:outline-none mt-4 md:mt-0"
            >
              <ArrowUpRight size={100} md:size={100} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
