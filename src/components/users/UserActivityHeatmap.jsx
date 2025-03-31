import React from 'react';
import { motion } from 'framer-motion';
import { CartesianAxis, ResponsiveContainer, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';

const userActivityData = [
  { name: 'Mon', '0-4': 42, '4-8': 87, '8-12': 65, '12-16': 121, '16-20': 33, '20-24': 78 },
  { name: 'Tue', '0-4': 55, '4-8': 69, '8-12': 112, '12-16': 45, '16-20': 97, '20-24': 154 },
  { name: 'Wed', '0-4': 83, '4-8': 37, '8-12': 99, '12-16': 164, '16-20': 110, '20-24': 63 },
  { name: 'Thu', '0-4': 28, '4-8': 144, '8-12': 58, '12-16': 79, '16-20': 102, '20-24': 91 },
  { name: 'Fri', '0-4': 66, '4-8': 159, '8-12': 115, '12-16': 40, '16-20': 123, '20-24': 88 },
  { name: 'Sat', '0-4': 106, '4-8': 118, '8-12': 67, '12-16': 91, '16-20': 172, '20-24': 134 },
  { name: 'Sun', '0-4': 34, '4-8': 61, '8-12': 89, '12-16': 175, '16-20': 149, '20-24': 46 },
];

const UserActivityHeatmap = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
      <h2 className='font-semibold text-xl text-gray-100 mb-4'>User Activity Heatmap</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianAxis strokeDasharray='3 3' stoke='#374151' />
            <XAxis dataKey='name' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(31,41,55,0.8)', borderColor: '#4B5563' }} itemStyle={{ color: '#E5E7EB' }} />
            <Legend />
            <Bar dataKey='0-4' stackId='a' fill='#6366F1' />
            <Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
            <Bar dataKey='8-12' stackId='a' fill='#EC4899' />
            <Bar dataKey='12-16' stackId='a' fill='#10B981' />
            <Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
            <Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
