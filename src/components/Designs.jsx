import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
// Import images directly
import image1 from '../assets/DesignsPage/fig1.jpg';
import image2 from '../assets/DesignsPage/fig2.jpg';
import image3 from '../assets/DesignsPage/fig3.jpg';
import image4 from '../assets/DesignsPage/fig4.jpg';
import image5 from '../assets/DesignsPage/fig5.jpg';
import image6 from '../assets/DesignsPage/fig6.jpg';
import image7 from '../assets/DesignsPage/fig7.jpg';
import image8 from '../assets/DesignsPage/fig8.jpg';
import image9 from '../assets/DesignsPage/fig9.jpg';
import image10 from '../assets/DesignsPage/fig10.jpg';
import image11 from '../assets/DesignsPage/fig11.jpg';
import image12 from '../assets/DesignsPage/fig12.jpg';
import image14 from '../assets/DesignsPage/fig14.jpg';
import image15 from '../assets/DesignsPage/fig15.jpg';
import image16 from '../assets/DesignsPage/fig16.jpg';
import image17 from '../assets/DesignsPage/fig17.jpg';
import image18 from '../assets/DesignsPage/fig18.jpg';
import image19 from '../assets/DesignsPage/fig19.jpg';
import image20 from '../assets/DesignsPage/fig20.jpg';
import image21 from '../assets/DesignsPage/fig21.jpg';

// Define the designsData array with direct image links
const designsData = [
  { id: 1, name: "Design 1", link: image1 },
  { id: 2, name: "Design 2", link: image2 },
  { id: 3, name: "Design 3", link: image3 },
  { id: 4, name: "Design 4", link: image4 },
  { id: 5, name: "Design 5", link: image5 },
  { id: 6, name: "Design 6", link: image6 },
  { id: 7, name: "Design 7", link: image7 },
  { id: 8, name: "Design 8", link: image8 },
  { id: 9, name: "Design 9", link: image9 },
  { id: 10, name: "Design 10", link: image10 },
  { id: 11, name: "Design 11", link: image11 },
  { id: 12, name: "Design 12", link: image12 },
  { id: 14, name: "Design 14", link: image14 },
  { id: 15, name: "Design 15", link: image15 },
  { id: 16, name: "Design 16", link: image16 },
  { id: 17, name: "Design 17", link: image17 },
  { id: 18, name: "Design 18", link: image18 },
  { id: 19, name: "Design 19", link: image19 },
  { id: 20, name: "Design 20", link: image20 },
  { id: 21, name: "Design 21", link: image21 },
];

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
        whileInView="show"
        className={`grid grid-cols-3 md:grid-cols-${columns} gap-8`}
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
