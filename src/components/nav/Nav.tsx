import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div className='flex justify-between gap-[1em] p-[1em] px-[3em] items-center bg-gradient-to-t from-purple-500 via-black-500 to-black text-white'>
      <Link to='/' className='border-2 p-[.15em] rounded hover:text-black hover:bg-gray-200 transition-all'>Home</Link>
      <h4 className='bg-gray-900 bg-opacity-25 p-[.15em] rounded'>Design with TailwindCSS and ReactJS</h4>
    </div>
  );
};

export { Nav };
