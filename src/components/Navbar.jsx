import React, { useState, useEffect, useRef } from 'react';
import Profile from './Profile';
import About from './About';
import Devs from './Devs';
import Designs from './Designs';
import Contact from './Contact';

const Navbar = () => {
  const [active, setActive] = useState('profile');
  const [capsuleStyle, setCapsuleStyle] = useState({});
  const navItemsRef = useRef([]);

  const navItems = [
    { name: 'Profile', id: 'profile' },
    { name: 'About', id: 'about' },
    { name: 'Devs', id: 'devs' },
    { name: 'Designs', id: 'designs' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleClick = (section, index) => {
    setActive(section);
    const selectedItem = navItemsRef.current[index];
    const itemWidth = selectedItem.offsetWidth;
    const itemLeft = selectedItem.offsetLeft;

    // Update capsule width based on screen size
    const capsuleWidth = window.innerWidth < 640 ? 70 : 116; // Smaller capsule for small screens
    const capsuleLeft = itemLeft + itemWidth / 2 - capsuleWidth / 2;

    setCapsuleStyle({
      width: `${capsuleWidth}px`,
      height: window.innerWidth < 640 ? '28px' : '48px', // Adjust capsule height for small screens
      left: `${capsuleLeft}px`,
      transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out', // Smooth transition
    });
  };

  useEffect(() => {
    const initialIndex = navItems.findIndex(item => item.id === active);
    handleClick(active, initialIndex);

    const handleResize = () => {
      handleClick(active, initialIndex); // Recalculate capsule position on window resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  return (
    <div>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-transparentNav bg-opacity-70 rounded-full px-3 py-1 md:px-5 md:py-2 flex justify-between w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl z-50">
        {/* Capsule */}
        <div
          className="absolute bg-white rounded-full shadow-lg"
          style={{ ...capsuleStyle, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        ></div>

        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            ref={(el) => (navItemsRef.current[index] = el)}
            onClick={() => handleClick(item.id, index)}
            className={`text-xs sm:text-sm md:text-md lg:text-lg text-center px-2 py-1 md:px-4 md:py-2 rounded-full text-black z-10 relative ${
              active === item.id ? 'font-bold' : ''
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Content */}
      <div className="content mt-20 md:mt-24"> {/* Adjust mt-24 to leave space for the fixed navbar */}
        {active === 'profile' && <Profile />}
        {active === 'about' && <About />}
        {active === 'devs' && <Devs />}
        {active === 'designs' && <Designs />}
        {active === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default Navbar;
