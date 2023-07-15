import Logo from '../assets/cs_logo.png';
import Navbar from './navbar';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';

function Header() {
  return (
    <div className='flex flex-col justify-center '>
      <div className='flex justify-center sm:justify-between my-5 mx-20'>
        <img
          className='w-40 self-center sm:self-auto'
          src={Logo}
          alt='cs-logo'
        />
        <div className='flex gap-5'>
          <div className='hidden sm:flex items-center'>
            <CiLocationOn className='text-yellow-500 mr-2' size={24} />
            <div className='border-l-2 pl-3 text-sm'>
              <p>351 California St. Ste. B200</p>
              <p>San Francisco, CA 94104</p>
            </div>
          </div>
          <div className='hidden sm:flex items-center'>
            <BsTelephone className='text-yellow-500 mr-2' size={24} />
            <div className='border-l-2 pl-3 text-sm font-bold text-yellow-500'>
              <p className='cursor-pointer'>+1415-528-7300</p>
              <p className='cursor-pointer'>+1650-539-0900</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
