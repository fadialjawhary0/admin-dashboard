import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
      <div className='flex items-center gap-4 px-4 py-5 sm:p-6'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{ backgroundColor: color }}>
          <Icon size={20} style={{ color: 'white' }} />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-gray-400'>{name}</p>
          <h2 className='text-2xl font-semibold'>{value}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
