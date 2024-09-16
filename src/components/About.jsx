import React from 'react';
import {motion, delay} from 'framer-motion'



// image import
import image1 from '../assets/AboutPage/div1.1.jpeg'; // Replace with your image paths
import image2 from '../assets/AboutPage/div1.2.jpeg';
import image3 from '../assets/AboutPage/div1.3.jpeg';
import image4 from '../assets/AboutPage/div1.4.jpeg';
import image5 from '../assets/AboutPage/div2.1.jpg'; // Replace with your image paths
import image6 from '../assets/AboutPage/div2.2.jpeg';
import image7 from '../assets/AboutPage/div3.1.jpeg'; // New image for Layout 3
import image8 from '../assets/AboutPage/div5.1.jpeg';
import image9 from '../assets/AboutPage/div5.2.jpg';

const About = () => {
    return (
        <div className="container mx-auto px-8 mt-36">
            {/* First Layout */}
            <div className="flex flex-col md:flex-row items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16">
  {/* Text Section */}
  <div className="flex-shrink-0">
    <div>
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-800 leading-tight pt-10"
      >
        Khushal
      </motion.h1>
    </div>
    <motion.h1
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.7 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-800 leading-tight ml-8 md:ml-12 lg:ml-24"
    >
      Khaitan
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.9 }}
      className="text-xs sm:text-sm md:text-md lg:text-lg uppercase text-gray-400 tracking-wide pt-6 sm:pt-8 md:pt-10 lg:pt-16 pl-6 sm:pl-8 md:pl-10 lg:pl-12"
    >
      loves coffee,
    </motion.p>
    <motion.p
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1 }}
      className="text-xs sm:text-sm md:text-md lg:text-lg uppercase text-gray-400 tracking-wide pl-8 sm:pl-12 lg:pl-24"
    >
      but also loves code
    </motion.p>
  </div>

  {/* Images Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex flex-col md:flex-row mt-10 md:mt-0 ml-0 md:ml-10">
  {/* Image 1 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 1 }}
    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
    className="w-full h-80 md:w-64 md:h-84 bg-gray-300 overflow-hidden rounded-lg mt-6 md:mt-36"
  >
    <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
  </motion.div>

  {/* Image 2 */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 1 }}
    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
    className="w-full md:w-64 h-64 md:h-96 bg-gray-300 overflow-hidden rounded-lg ml-0 md:ml-6 mt-6 md:mt-8"
  >
    <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
  </motion.div>

  {/* Image 3 and Image 4 */}
  <div className="ml-0 md:ml-6 relative">
    {/* Image 3 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
      className="w-full md:w-64 h-64 md:h-80 bg-gray-300 overflow-hidden rounded-lg mt-6 md:mt-0"
    >
      <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
    </motion.div>

    {/* Image 4 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.0 }}
      className="w-full md:w-64 h-32 md:h-40 bg-gray-300 overflow-hidden rounded-lg mt-6"
    >
      <img src={image4} alt="Image 4" className="w-full h-full object-cover" />
    </motion.div>
  </div>
</div>

</div>


            <div className="mt-16 text-center">
                <hr className="line" />
            </div>

            {/* Second Layout */}
            <div className="mt-24 px-4 sm:px-8">
  <div className="flex flex-col lg:flex-row justify-between items-start">
    <div className="flex flex-col lg:flex-row w-full lg:w-2/3 lg:space-x-8">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
        className="w-full h-64 md:mt-8 sm:h-96 bg-gray-300 overflow-hidden rounded-lg mb-8 lg:mb-0"
      >
        <img src={image5} alt="Image 5" className="w-full h-full object-cover opacity-75" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
        className="w-full h-64 md:mt-32 sm:h-96 bg-gray-300 overflow-hidden rounded-lg"
      >
        <img src={image6} alt="Image 6" className="w-full h-full object-cover" />
      </motion.div>
    </div>

    <div className="w-full lg:w-1/3 flex-shrink-0 lg:ml-16 mt-8 lg:mt-0">
      {/* Info Section */}
      <p className="text-xs sm:text-sm uppercase text-gray-400 tracking-wide">INFO</p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
        className="text-sm sm:text-base text-gray-700 mt-4"
      >
        I'm a CSE student from India. As an undergraduate specializing in software development, I am passionate about creating and designing beautiful websites.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.7 }}
        className="text-sm sm:text-base text-gray-700 mt-4"
      >
        Since last 2 years, I’ve been designing spaces that people can enjoy strolling around, always striving to curate an engaging human experience as they navigate the built environment. As an artist, I’ve been curious about understanding human interaction to build more intuitive things – there are many complexities in human relationships with nature and architecture with so much still to explore.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.9 }}
        className="text-sm sm:text-base text-gray-700 mt-4"
      >
        As a designer, I’m aware that my work shapes experiences, influences emotions, and guides user behavior. I find inspiration in the work of others, using it as a foundation to enhance and apply new ideas to my own designs. This awareness drives me to create designs that are not only visually compelling but also ethical, inclusive, and user-centered. Every choice I make impacts how people engage with and perceive the world around them.
      </motion.p>
    </div>
  </div>

  <div className="mt-16 text-center">
    <hr className="line" />
  </div>
</div>


            {/* Third Layout */}
            <div className="mt-24">
  <div className="flex flex-col md:flex-row justify-between items-start">
    {/* Text Section */}
    <div className="w-full md:w-1/2">
      <p className="text-xs uppercase text-gray-400 tracking-wide mt-6">Education</p>
      <motion.h2 
        initial={{opacity: 0, x: 100}} 
        whileInView={{opacity: 1, x: 1}} 
        transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.6}} 
        className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mt-4">
        SRM University, Chennai
      </motion.h2>
      <motion.h3 
        initial={{opacity: 0, x: 100}} 
        whileInView={{opacity: 1, x: 1}} 
        transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.8}} 
        className="text-xl md:text-3xl text-gray-600 leading-tight mt-2">
        College of Science and Technology
      </motion.h3>
      <motion.p 
        initial={{opacity: 0, x: 100}} 
        whileInView={{opacity: 1, x: 1}} 
        transition={{type: "spring", stiffness: 100, damping: 15, delay: 1}} 
        className="text-sm text-gray-700 mt-4">
        Bachelors of Technology - CSE with Software Engineering
      </motion.p>
    </div>

    {/* Image Section */}
    <motion.div 
      initial={{opacity: 0, y: 100}} 
      whileInView={{opacity: 1, y: 1}} 
      transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.5}} 
      className="w-full md:w-1/2 mt-8 md:mt-0">
      <div className="w-full h-64 md:h-96 bg-gray-300 overflow-hidden rounded-lg">
        <img src={image7} alt="SRM campus on a random morning" className="w-full h-full object-cover" />
      </div>
      <motion.p 
        initial={{opacity: 0, y: -100}} 
        whileInView={{opacity: 1, y: 1}} 
        transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}} 
        className="text-gray-700 mt-4 text-center">
        SRM campus on a random morning
      </motion.p>
    </motion.div>
  </div>

  <div className="mt-16 text-center">
    <hr className="line" />
  </div>
</div>


            {/* Fourth Layout */}
{/* Fourth Layout */}
<div className="mt-24">
  <p className="text-xs uppercase text-gray-400 tracking-wide">Design Foundations</p>
  
  <div className="flex flex-col md:flex-row justify-between mt-6">
    {/* Left Column */}
    <div className="w-full md:w-1/2 md:pr-8">
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
        className="text-xl font-bold text-gray-800"
      >
        Great Taste
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.0 }}
        className="text-sm text-gray-700 mt-4"
      >
        Great design stems from a keen sense of aesthetic judgment, honed through exploration and cross-disciplinary learning. My approach is rooted in a deep appreciation for the nuances of design across various domains—whether it's the elegance of architecture, the innovation in fashion, or the precision in digital interfaces. By immersing myself in diverse design disciplines, I cultivate a refined taste that informs my work. I constantly seek out new inspirations and challenge conventional ideas to elevate my design practice to new heights.
      </motion.p>
    </div>
    
    {/* Right Column */}
    <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
        className="text-xl font-bold text-gray-800"
      >
        Future of Technology
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
        className="text-sm text-gray-700 mt-4"
      >
        The evolution of technology is reshaping the way we interact with the world, and the future promises even more transformative changes. I am particularly excited about how emerging technologies are redefining user interactions and making interfaces more intuitive. The next generation of tech will likely blur the lines between the digital and physical realms, enhancing how we engage with our surroundings. I am enthusiastic about exploring how these advancements can create more immersive and seamless experiences, making technology an almost invisible extension of our daily lives.
      </motion.p>
    </div>
  </div>

  <div className="mt-16 text-center">
    <hr className="line" />
  </div>
</div>


            {/* fifth layout */}
{/* Layout5 */}
<div className="mt-24">
    <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
            <p className="text-xs uppercase text-gray-400 tracking-wide mt-6">other things i like to do</p>
            <motion.h2 
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.4}} 
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mt-4">
                Sketching and Doodling
            </motion.h2>
            <motion.h2 
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.5}} 
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mt-4">
                Hiking
            </motion.h2>
            <motion.h2 
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.6}} 
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mt-4">
                Travelling
            </motion.h2>
            <motion.h2 
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}} 
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mt-4">
                Visiting new cafes
            </motion.h2>
            <motion.h2 
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.8}} 
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mt-4">
                Random clicks
            </motion.h2>
        </div>

        {/* Images Section */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Image 1 */}
                <motion.div 
                    initial={{opacity: 0, y: 100}} 
                    whileInView={{opacity: 1, y: 1}} 
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.6}} 
                    className="w-full md:w-1/2 h-64 md:h-96 bg-gray-300 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-2">
                    <img src={image8} alt="Image 7" className="w-full h-full object-cover" />
                </motion.div>
                {/* Image 2 */}
                <motion.div 
                    initial={{opacity: 0, y: 100}} 
                    whileInView={{opacity: 1, y: 1}} 
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.9}} 
                    className="w-full md:w-1/2 h-64 md:h-96 bg-gray-300 overflow-hidden rounded-lg mt-4 md:mt-20 md:ml-2">
                    <img src={image9} alt="Image 8" className="w-full h-full object-cover" />
                </motion.div>
            </div>
            <motion.p 
                initial={{opacity: 0, y: -100}} 
                whileInView={{opacity: 1, y: 1}} 
                transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.8}} 
                className="text-gray-700 text-center md:pr-96 -mt-16 md:-mt-20">
                A photo of top of Kodaikanal hills.
            </motion.p>
        </div>
    </div>

    <div className="mt-16 text-center">
        <hr className="line" />
    </div>
</div>

        </div>
    );
};

export default About;
