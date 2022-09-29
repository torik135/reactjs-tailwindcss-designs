import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { links } from '../../data/links';

const Home: React.FC = memo(() => {
  return (
    <>
      <div className='flex mt-[3em] p-[.5em]'>
        <div className='grid grid-cols-6 grid-flow-cols gap-[1rem]'>
          {links.map((link) => (
            <Link
              key={`${link.text}_${Math.random()}`}
              to={link.to}
              className='border-2 rounded-md w-[12rem] h-[15rem] text-center flex justify-center items-center hover:scale-95 hover:font-bold text-white bg-layered-steps bg-cover transition-all'
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});

export { Home };
