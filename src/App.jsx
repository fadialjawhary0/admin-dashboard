import { Route, Routes } from 'react-router-dom';
import OverviewPage from './views/Overview/OverviewPage';
import ProductsPage from './views/Products/ProductsPage';
import Sidebar from './components/Sidebar';
import UsersPage from './views/Users/UsersPage';
import SalesPage from './views/Sales/SalesPage';
import OrdersPage from './views/Orders/OrdersPage';
import AnalyticsPage from './views/Analytics/AnalyticsPage';
import SettingsPage from './views/Settings/SettingsPage';

const App = () => {
  return (
    <div className='flex min-h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      <Sidebar />
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
