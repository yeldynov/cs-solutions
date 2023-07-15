import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-center flex-wrap py-6 mx-5 sm:mx-20'>
      <div className='flex justify-between w-full lg:hidden'>
        <div className='lg:hidden block w-full'>
          <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
            <input
              className='peer h-full w-full outline-none text-sm text-gray-700 pl-2'
              type='text'
              id='search'
              placeholder='Search something..'
            />
            <div className='grid place-items-center h-full w-12 text-gray-300'>
              <BsSearch />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
        >
          <RxHamburgerMenu className={`${isOpen ? 'hidden' : 'block'}`} />
          <AiOutlineClose className={`${isOpen ? 'block' : 'hidden'}`} />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className='text-md sm:flex-grow'>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            HOME
          </a>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            ABOUT
          </a>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            SERVICES
          </a>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            PORTFOLIO
          </a>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            WHY CHOOSE US
          </a>
          <a
            href='#'
            className='block mt-4 hover:text-yellow-500 lg:inline-block lg:mt-0 text-white-200 mr-14'
          >
            CONTACT US
          </a>
        </div>
        <div>
          <div className='hidden sm:block max-w-md mx-auto'>
            <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
              <input
                className='peer h-full w-full outline-none text-sm text-gray-700 pl-2'
                type='text'
                id='search'
                placeholder='Search something..'
              />
              <div className='grid place-items-center h-full w-12 text-gray-300'>
                <BsSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
