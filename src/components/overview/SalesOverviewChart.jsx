import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
  { name: 'Jul', sales: 4783 },
  { name: 'Aug', sales: 6124 },
  { name: 'Sep', sales: 3791 },
  { name: 'Oct', sales: 7460 },
  { name: 'Nov', sales: 5223 },
  { name: 'Dec', sales: 6951 },
  { name: 'Jan', sales: 5832 },
  { name: 'Feb', sales: 4687 },
  { name: 'Mar', sales: 7314 },
  { name: 'Apr', sales: 3241 },
  { name: 'May', sales: 6420 },
  { name: 'Jun', sales: 7993 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

      <div className='h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey='name' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(31,41,55,0.8)', borderColor: '#4B5563' }} itemStyle={{ color: '#E5E7EB' }} />
            <Line type='monotone' dataKey='sales' stroke='#6366F1' strokeWidth={3} dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }} activeDot={{ r: 8, strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
