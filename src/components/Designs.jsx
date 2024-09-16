import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import designsData from '../data/DesignsData';

const Designs = () => {
  const [columns, setColumns] = useState(3);

  const toggleColumns = () => {
    setColumns(columns === 3 ? 1 : 3);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl text-start font-semibold text-gray-800">
          and on a random day,
          <br />
          I got inspired by <span className="text-red-600">PINTEREST</span>
        </h1>
      </motion.div>

      <div className="text-center mb-8">
        <button
          onClick={toggleColumns}
          className="bg-transparentNav text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-200 ml-1/3"
        >
          View As {columns === 3 ? 'Full Size' : 'Grouped'}
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}
      >
        {designsData.map((design) => (
          <motion.div
            key={design.id}
            className="relative group rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <picture>
              <source
                srcSet={`${design.link}?w=400 400w, ${design.link}?w=800 800w, ${design.link}?w=1200 1200w`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                type="image/jpeg"
              />
              <img
                src={`${design.link}?w=800`} // Provide a default image size
                alt={design.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:blur-sm group-hover:scale-105 group-hover:ring-4 group-hover:ring-blue-500"
              />
            </picture>
            <div className="absolute inset-0 flex justify-between items-start p-4">
              <h3 className="text-lg bg-black px-2 py-1 rounded font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {design.name}
              </h3>
              <FiArrowUpRight className="text-white bg-black p-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Designs;
