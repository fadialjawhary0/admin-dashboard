import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { SIDEBAR_LINKS } from '../constants/SidebarLinks.const';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth <= 640) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    if (window.innerWidth <= 640) {
      setIsSidebarOpen(false);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (width > 640) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : width <= 640 ? 60 : 80 }}>
      <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-1 sm:p-4 flex flex-col border-r border-gray-700'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'>
          <Menu size={24} />
        </motion.button>
        <nav className='mt-8 flex-grow'>
          {SIDEBAR_LINKS?.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <Link key={item?.href} to={item?.href}>
                <motion.div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                  <item.icon size={20} style={{ color: item?.color, minWidth: '20px' }} />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className='ml-4 whitespace-nowrap'
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}>
                        {item?.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
