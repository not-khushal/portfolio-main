import React from 'react';
import {motion} from 'framer-motion';
import { FaPenNib, FaCode, FaCoffee, FaPaintBrush, FaReact, FaJsSquare, FaFigma, FaWordpress, FaNodeJs, FaCss3, FaGitAlt, FaHtml5, FaWix } from 'react-icons/fa';
import {  FiFramer } from 'react-icons/fi';  // Importing necessary icons
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import image1 from '../assets/ProfilePage/div1.1.jpeg';
import image2 from '../assets/ProfilePage/div1.2.jpeg';
import image3 from '../assets/ProfilePage/div2.1.png';
import image4 from '../assets/ProfilePage/div2.2.png';

const Profile = () => {


  return (
    <div className="min-h-screen flex flex-col items-center bg-white space-y-32 mt-40"> {/* Added space-y-32 for spacing between layouts */}
      
      {/* Layout 1 */}
      <div className="text-center mt-12">
        <motion.h1 initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 10,delay: 0.3,}} className="text-5xl font-light">
          Hey <span role="img" aria-label="wave">👋</span> I'm <span className='font-bold'>Khushal</span>
        </motion.h1>
      </div>

      {/*Image Section */}
      <motion.div 
  initial={{ opacity: 0, y: 100 }} 
  whileInView={{ opacity: 1, y: 1 }} 
  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }} 
  className="flex flex-col md:flex-row justify-center mt-16 md:space-x-8 space-y-8 md:space-y-0"
>
  <img
    src={image1}
    alt=""
    className="rounded-lg w-full md:w-[32rem] h-[32rem] object-cover" // Square size on all screens
  />
  <img
    src={image2}
    alt=""
    className="rounded-lg w-full md:w-[32rem] h-[32rem] object-cover" // Square size on all screens
  />
</motion.div>



            {/* Border Divider */}
            <div className="border-b-2 border-gray-400 mt-6 w-64"></div>



{/* Layout 6 - Timeline (Education Section) */}
<div className="w-full px-8 py-16">
  <motion.h2 
    initial={{opacity:0, y: 100}} 
    whileInView={{opacity:1, y:1}} 
    transition={{type: "spring",stiffness: 100,damping: 10,delay: 0.3,}} 
    className="text-3xl md:text-5xl font-bold text-center pb-12 md:pb-28"
  >
    Education
  </motion.h2>

  <div className="relative md:pl-12">


    {/* Timeline Item 1 */}
    <div className="flex flex-col md:flex-row items-start md:items-center mb-12 relative">
      <div className="w-full md:w-1/3 text-left md:text-right pr-8">
        <motion.h4 
          initial={{opacity:0, x: 100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.6,}} 
          className="text-lg md:text-xl font-bold"
        >
          2021 - 2025
        </motion.h4>
      </div>
      <div className="relative w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.6,}}  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-black rounded-full z-10"></motion.div> {/* Adjusted Dot */}
      </div>
      <div className="w-full md:w-1/2 pl-8 ">
        <motion.h4 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.6,}} 
          className="text-xl md:text-2xl sm: font-bold"
        >
          Bachelor's in Computer Science - 9.25 GPA
        </motion.h4>
        <motion.p 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.7,}} 
          className="text-gray-600 text-sm md:text-base"
        >
          SRM University, India
        </motion.p>
      </div>
    </div>

    {/* Timeline Item 2 */}
    <div className="flex flex-col md:flex-row items-start md:items-center mb-12 relative">
      <div className="w-full md:w-1/3 text-left md:text-right pr-8">
        <motion.h4 
          initial={{opacity:0, x: 100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.8,}} 
          className="text-lg md:text-xl font-bold"
        >
          2020
        </motion.h4>
      </div>
      <div className="relative w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.8,}} className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-black rounded-full z-10"></motion.div> {/* Adjusted Dot */}
      </div>
      <div className="w-full md:w-1/2 pl-8">
        <motion.h4 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.8,}} 
          className="text-xl md:text-2xl font-bold"
        >
          High School
        </motion.h4>
        <motion.p 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.9,}} 
          className="text-gray-600 text-sm md:text-base"
        >
          PAS, India
        </motion.p>
      </div>
    </div>

    {/* Timeline Item 3 */}
    <div className="flex flex-col md:flex-row items-start md:items-center mb-12 relative">
      <div className="w-full md:w-1/3 text-left md:text-right pr-8">
        <motion.h4 
          initial={{opacity:0, x: 100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 1.0,}} 
          className="text-lg md:text-xl font-bold"
        >
          2018
        </motion.h4>
      </div>
      <div className="relative w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 15,delay: 1.0,}} className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-black rounded-full z-10"></motion.div> {/* Adjusted Dot */}
      </div>
      <div className="w-full md:w-1/2 pl-8">
        <motion.h4 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 1.0,}} 
          className="text-xl md:text-2xl font-bold"
        >
          Intermediate
        </motion.h4>
        <motion.p 
          initial={{opacity:0, x: -100}} 
          whileInView={{opacity:1, x:1}} 
          transition={{type: "spring",stiffness: 100,damping: 15,delay: 1.1,}} 
          className="text-gray-600 text-sm md:text-base"
        >
          PAS, India
        </motion.p>
      </div>
    </div>
  </div>
</div>

      {/* border line */}
      <div className="border-b-2 border-gray-400  w-64  "></div>
      {/* Layout 7 - "What I know Section */}
      <div className="text-center mt-12">
  <motion.h1 
    initial={{opacity: 0, y: 100}} 
    whileInView={{opacity: 1, y: 1}} 
    transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.5}} 
    className="text-4xl font-bold">
    What I know?
  </motion.h1>
</div>

<div className="grid grid-cols-3 md:grid-cols-4 gap-10 mt-12 w-full px-4 md:px-12">
  {/* Icon placeholders */}
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}}>
    <FaReact className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}}>
    <FaJsSquare className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}}>
    <FiFramer className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.7}}>
    <FaFigma className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.9}}>
    <FaWordpress className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.9}}>
    <FaNodeJs className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.9}}>
    <RiTailwindCssFill className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.9}}>
    <FaCss3 className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 1.1}}>
    <FaGitAlt className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 1.1}}>
    <FaHtml5 className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 1.1}}>
    <DiMongodb className="mx-auto text-5xl" />
  </motion.div>
  
  <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 1}} transition={{type: "spring", stiffness: 100, damping: 15, delay: 1.1}}>
    <FaWix className="mx-auto text-5xl" />
  </motion.div>
</div>


      {/* Border Divider */}
      <div className="border-b-2 border-gray-400 mt-6 w-64"></div>

      
      {/* Layout 2 - "What I do?" Section */}
      <div className="text-center mt-12">
        <motion.h1 initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.5,}} className="text-5xl font-bold">
          What I do?
        </motion.h1>
      </div>

{/* Layout 3 - UI/UX Designer Section */}
<div className="flex flex-col md:flex-row justify-between items-center mt-32 w-full px-6 md:px-24"> {/* Adjusted px for smaller screens */}
  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <motion.h2 
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
      className="text-2xl md:text-4xl font-light" 
      /* Adjusted text size for smaller screens */
    >
      UI/UX <span className="font-bold">DESIGNER</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.9 }}
      className="mt-4 md:mt-6 text-base md:text-lg" /* Adjusted text size for smaller screens */
    >
      I am fascinated by technology innovations, product branding, and typography. 
      I offer my design skills to build awesome websites and mobile applications 
      in line with the ambitions of their owners.
    </motion.p>
    <motion.p 
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
      className="mt-4 text-base md:text-lg" /* Adjusted text size for smaller screens */
    >
      What I love above all things is pushing the limits of ergonomics and conception 
      without ever neglecting user experience. I get inspired by other people’s work and
      nature and try to get the best outcomes from it.
    </motion.p>
    {/* Bottom Line */}
    <div className="border-b-2 border-gray-400 mt-4 md:mt-6 w-16 md:w-24"></div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center mt-8 md:mt-0">
    <motion.img
      initial={{ opacity: 0, x: 100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
      src={image3} // Replace with the actual path or URL
      alt="UI/UX Designer"
      className="w-48 h-48 md:w-56 md:h-56 sm:opacity-0" /* Adjusted image size for smaller screens */
    />
  </div>
</div>

{/* Layout 4 - Front-End Dev Section */}
<div className="flex flex-col md:flex-row justify-between items-center mt-32 w-full px-6 md:px-24"> {/* Adjusted px for smaller screens */}
  {/* Image Section */}
  <div className="flex justify-center mt-8 md:mt-0">
    <motion.img
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
      src={image4} // Replace with the actual path or URL
      alt="Front-End Developer"
      className="w-48 h-48 md:w-56 md:h-56" /* Adjusted image size for smaller screens */
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 text-right mt-8 md:mt-0">
    <motion.h2 
      initial={{ opacity: 0, x: 100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
      className="text-2xl md:text-4xl font-light" /* Adjusted text size for smaller screens */
    >
      FRONT-END <span className="font-bold">DEV</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, x: 100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.9 }}
      className="mt-4 md:mt-6 text-base md:text-lg" /* Adjusted text size for smaller screens */
    >
      To go along with my dev skills, my toolbox is filled with acronyms you might 
      be afraid of such as HTML5, CSS3, JS, ReactJs, Framer, Locomotive, and TailwindCSS. I love to see new standards 
      appear and mature, allowing the creation of new websites, each one more advanced 
      and amazing than the previous.
    </motion.p>
    <motion.p 
      initial={{ opacity: 0, x: 100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
      className="mt-4 text-base md:text-lg" /* Adjusted text size for smaller screens */
    >
      Getting inspired from nature and other peoples's works and trying to implement the good qualities of those
      in my work with the blend of my ideas to create websites that are appealing.
    </motion.p>
    {/* Bottom Line */}
    <div className="border-b-2 border-gray-400 mt-4 md:mt-6 w-16 md:w-24 ml-auto"></div> {/* Adjusted line width for smaller screens */}
  </div>
</div>


      {/* Layout 5 - Services Section */}
      <div className="w-full text-center mt-32 px-8">
        <motion.h2 initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:1}} transition={{type: "spring",stiffness: 100,damping: 15,delay: 0.5,}} className="text-5xl font-bold">What I am great at?</motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
  {/* Box 1 */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
    className="flex flex-col items-center border-black border-2 bg-white text-black hover:text-white hover:bg-black p-8 rounded-lg w-64 h-64 sm:w-48 sm:h-48"
  >
    <FaPenNib size={80} className="mb-4 size-10" />
    <h3 className="text-2xl font-bold text-center sm:text-xl">UI/UX Design</h3>
    <p className="mt-2 text-center sm:text-sm">130+ designs</p>
  </motion.div>

  {/* Box 2 */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.3 }}
    className="flex flex-col items-center border-black border-2 bg-white text-black hover:text-white hover:bg-black p-8 rounded-lg w-64 h-64 sm:w-48 sm:h-48"
  >
    <FaCode size={80}  className="mb-4 size-10" />
    <h3 className="text-2xl font-bold text-center sm:text-xl">Web Development</h3>
    <p className="mt-2 text-center sm:text-sm">50+ projects</p>
  </motion.div>

  {/* Box 3 */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.3 }}
    className="flex flex-col items-center border-black border-2 bg-white text-black hover:text-white hover:bg-black p-8 rounded-lg w-64 h-64 sm:w-48 sm:h-48"
  >
    <FaCoffee size={30} className="mb-4" />
    <h3 className="text-2xl font-bold text-center sm:text-xl">Coffee</h3>
    <p className="mt-2 text-center sm:text-sm">1200+ cups</p>
  </motion.div>

  {/* Box 4 */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
    className="flex flex-col items-center border-black border-2 bg-white text-black hover:text-white hover:bg-black p-8 rounded-lg w-64 h-64 sm:w-48 sm:h-48"
  >
    <FaPaintBrush size={30} className="mb-4" />
    <h3 className="text-2xl font-bold text-center sm:text-xl">Sketches</h3>
    <p className="mt-2 text-center sm:text-sm">250+ sketches</p>
  </motion.div>
</div>



{/* Statistics Section */}
<div className="flex flex-wrap justify-center gap-8 mt-12">
  {/* Statistic 1 */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.5 }}
    className="flex flex-col items-center"
  >
    <div className="text-4xl font-bold sm:text-3xl">1.5+</div>
    <div className="text-sm sm:text-xs">Years of Experience</div>
  </motion.div>

  {/* Statistic 2 */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
    className="flex flex-col items-center"
  >
    <div className="text-4xl font-bold sm:text-3xl">200+</div>
    <div className="text-sm sm:text-xs">Design Ideas</div>
  </motion.div>

  {/* Statistic 3 */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
    className="flex flex-col items-center"
  >
    <div className="text-4xl font-bold sm:text-3xl">50+</div>
    <div className="text-sm sm:text-xs">Ideas Implemented</div>
  </motion.div>

  {/* Statistic 4 */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.5 }}
    className="flex flex-col items-center"
  >
    <div className="text-4xl font-bold sm:text-3xl">10+</div>
    <div className="text-sm sm:text-xs">Ideas Deployed</div>
  </motion.div>
</div>


      {/* border line */}
      <div className="border-b-2 border-gray-400 mt-6 w-64  "></div>

{/* layout 8 */}
<div className="text-center mt-12">
  <motion.h1 
    initial={{opacity: 0, y: 100}} 
    whileInView={{opacity: 1, y: 1}} 
    transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.6}} 
    className="text-3xl sm:text-5xl font-semibold">
    Got a project?
  </motion.h1>

  <motion.h1 
    initial={{opacity: 0, y: 100}} 
    whileInView={{opacity: 1, y: 1}} 
    transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.9}} 
    className="text-2xl sm:text-4xl text-gray-400 font-semibold pt-2">
    Let's connect.
  </motion.h1>
</div>


            {/* Border Divider */}
            <div className="border-b-2 border-gray-400 mt-6 w-64"></div>


      

    </div>
  );
};

export default Profile;

