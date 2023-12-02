'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  init: {
    opacity: 0, height: '0%'
  },
  open: {
    opacity: 1,
    height: '100%',
    transition: {
      ease: 'linear',
      y: { duration: 2 },
      type: 'tween',
      stiffness: 400,
    },
  },
  closed: { opacity: 0, height: '0%' },
};

const navLinkAnimation = {
  init: {
    opacity: 0,
    translateY: -100,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

export default function SideMenu({ toggleShow, onClick }) {

  const [linkact, setlinkact] = useState(toggleShow);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    onClick();
    // Optionally, you can also update linkact state if needed
    setlinkact(false);
  };

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
    },
    {
      id: 2,
      name: 'About',
      path: 'about',
    },
    {
      id: 3,
      name: 'Projects',
      path: 'projects',
    },
    {
      id: 4,
      name: 'Resume',
      path: 'resume',
    },
    {
      id: 5,
      name: 'Contact',
      path: 'contact',
    },
  ];
  return (
    <motion.div
      className="w-full h-0 bg-clrTitle fixed top-0 shadow-xl"
      // animate={(toggleShow ? 'open' : 'closed') || (linkact ? 'open' : 'closed')}
      animate={(toggleShow || linkact) ? 'open' : 'closed'}
      variants={variants}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 fixed">
        {navLinks.map((navLink, i) => (
          <motion.div
            key={navLink.id}
            variants={navLinkAnimation}
            initial="init"
            animate="animate"
            transition={{
              type: 'spring',
              duration: 3,
              delay: i * 0.1,
            }}
            whileHover={{
              scale: 1.6,
              transition: { duration: 0.6 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={`#${navLink.path}`} className="text-7xl font-medium text-clrSubTitle uppercase" onClick={handleLinkClick}>
              {navLink.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
