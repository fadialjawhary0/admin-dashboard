import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye } from 'lucide-react';

const orderData = [
  { id: '001-ORD', customer: 'Liam Carter', total: 743.25, status: 'Delivered', date: '2025-03-01' },
  { id: '002-ORD', customer: 'Sophia Nguyen', total: 158.6, status: 'Shipped', date: '2025-03-02' },
  { id: '003-ORD', customer: 'Ethan Brooks', total: 329.15, status: 'Processing', date: '2025-03-03' },
  { id: '004-ORD', customer: 'Mia Patel', total: 567.8, status: 'Pending', date: '2025-03-04' },
  { id: '005-ORD', customer: 'Noah Scott', total: 96.45, status: 'Delivered', date: '2025-03-05' },
  { id: '006-ORD', customer: 'Ava Ramirez', total: 211.9, status: 'Processing', date: '2025-03-06' },
  { id: '007-ORD', customer: 'Lucas Bennett', total: 684.7, status: 'Shipped', date: '2025-03-07' },
  { id: '008-ORD', customer: 'Isabella Kim', total: 142.35, status: 'Pending', date: '2025-03-08' },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(order => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term));
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-left sm:items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search orders...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Order ID</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Customer</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Total</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Date</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide divide-gray-700'>
            {filteredOrders?.map(order => (
              <motion.tr key={order?.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>{order?.id}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>{order?.customer}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>${order?.total?.toFixed(2)}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order?.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order?.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order?.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {order?.status}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{order?.date}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default OrdersTable;
