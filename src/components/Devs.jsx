// Devs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Import images
import image1 from '../assets/DevsPage/image1.jpeg';
import image2 from '../assets/DevsPage/image2.jpeg';
import image3 from '../assets/DevsPage/image3.jpeg';
import image4 from '../assets/DevsPage/image4.jpeg';
import image5 from '../assets/DevsPage/image5.jpeg';
import image6 from '../assets/DevsPage/image6.jpeg';
import image7 from '../assets/DevsPage/image7.jpeg';
import image8 from '../assets/DevsPage/image8.jpeg';
import image9 from '../assets/DevsPage/image9.jpeg';
import image10 from '../assets/DevsPage/image10.jpeg';
import image11 from '../assets/DevsPage/image11.jpeg';

const devsData = [
  { id: 1, name: "Digital Agency", link: image1 },
  { id: 2, name: "Animated Fanta", link: image2 },
  { id: 3, name: "Animated Portfolio 1", link: image3 },
  { id: 4, name: "Animated-Portfolio 2", link: image4 },
  { id: 5, name: "Black Tumbler Cafe", link: image5 },
  { id: 6, name: "Shoes E-Commerce", link: image6 },
  { id: 7, name: "Tinder For Desktop", link: image7 },
  { id: 8, name: "Two Good Co Clone", link: image8 },
  { id: 9, name: "Skill X Learning", link: image9 },
  { id: 10, name: "Space Landing Page", link: image10 },
  { id: 11, name: "Tourism Landing Page", link: image11 },
];

const Devs = () => {
  const [hoveredDev, setHoveredDev] = useState(null);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 space-y-8 relative">
      
      {/* Centered header */}
      <motion.h1 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 1 }} 
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}  
        className="text-3xl md:text-5xl font-semibold ml-0 md:ml-24 w-full mb-8 md:mb-16 text-center md:text-left"
      >
        <span className="text-red-600">Frontend</span> projects<br />
        that I have worked on
      </motion.h1>

      {/* Grid container for layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
        
        {/* First column: Serial numbers, project names, and lines */}
        <div className="space-y-6 w-full">
          {devsData.map((dev, index) => (
            <motion.div
              key={dev.id}
              className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
              onMouseEnter={() => setHoveredDev(dev)}
              onMouseLeave={() => setHoveredDev(null)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              {/* Serial number */}
              <span className="text-black font-semibold mr-8 ml-0 md:ml-16 text-xl md:text-2xl">{`0${dev.id}`}</span>

              {/* Project name with hover effect */}
              <span className="text-black font-semibold text-xl md:text-3xl group-hover:bg-black group-hover:text-white rounded-full px-6 py-2 md:px-10 md:py-2 transition-colors duration-300 cursor-pointer whitespace-nowrap inline-block">
                {dev.name}
              </span>

              {/* Separation line */}
              <hr className="flex-grow mt-4 border-t border-gray-300 ml-0 md:ml-10" />

              {/* Dynamically positioned image */}
              {hoveredDev && hoveredDev.id === dev.id && (
                <motion.img
                  src={hoveredDev.link}
                  alt={hoveredDev.name}
                  className="absolute right-0 md:right-[-600px] top-1 transform -translate-y-1/2 w-full md:w-[500px] h-auto object-contain transition-transform duration-500 ease-in-out shadow-lg"
                  style={{ zIndex: 10 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devs;
