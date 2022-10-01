import React from 'react';

import { html, css, js } from '../../assets';

const Techs: React.FC = () => (
  <section id='techs' className='p-6 my-12 scroll-mt-20'>
    <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
      Our Techs
    </h2>
    <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'>
      <li className='flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl w-2/3 sm:w-5/6 '>
        <img src={html} alt='html' className='w-1/2 mb-6' />
        <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
          HTML
        </h3>
        <p className='hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Layout
        </p>
        <p className='sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Simple Page
        </p>
      </li>

      <li className='flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl w-2/3 sm:w-5/6 '>
        <img src={css} alt='css' className='w-1/2 mb-6' />
        <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
          CSS
        </h3>
        <p className='hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Styling
        </p>
        <p className='sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Simple Page + Style
        </p>
      </li>

      <li className='flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl w-2/3 sm:w-5/6 '>
        <img src={js} alt='javasript' className='w-1/2 mb-6' />
        <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
          Javascript
        </h3>
        <p className='hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Dynamic
        </p>
        <p className='sm:hidden text-xl text-center text-slate-500 dark:text-slate-400 mt-2'>
          Simple Page + Style + Dynamic
        </p>
      </li>
    </ul>
  </section>
);

export { Techs };
