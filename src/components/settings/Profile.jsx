import { User } from 'lucide-react';
import SettingSection from './SettingSection';

const Profile = () => {
  return (
    <SettingSection icon={User} title={'Profile'}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img src='https://randomuser.me/api/portraits/men/7.jpg' alt='Profile' className='rounded-full w-20 h-20 object-cover mr-4' />

        <div className='text-center sm:text-left'>
          <h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
          <p className='text-gray-400'>john.doe@example.com</p>
        </div>
      </div>

      <button className='cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
