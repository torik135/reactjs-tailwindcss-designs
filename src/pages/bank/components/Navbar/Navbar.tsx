import React, { useState } from 'react';

import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[9rem] h-[3rem]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((i, idx) => (
          <li
            key={Math.random()}
            className={`font-poppins font-normal cursor-pointer text-[1rem] text-white ${
              idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${i.id}`}>{i.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[1.5rem] h-[1.5rem] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-[17rem] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((i, idx) => (
              <li
                key={Math.random()}
                className={`font-poppins font-normal cursor-pointer text-[1rem] text-white ${
                  idx === navLinks.length - 1 ? 'mb-0' : 'mb-5'
                }`}
              >
                <a href={`#${i.id}`}>{i.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
