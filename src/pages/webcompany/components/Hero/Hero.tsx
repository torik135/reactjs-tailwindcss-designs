import React from 'react';

import { hero } from '../../assets';

const Hero: React.FC = () => (
  <section
    id='hero'
    className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-[9em] mt-[5em] scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height'
  >
    <article className='sm:w-1/2'>
      <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
        This is A{' '}
        <span className='text-indigo-900 dark:text-indigo-300'>
          Web Company
        </span>{' '}
        like any other web company...
      </h2>
      <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
        We're building web app like any other company but better...
      </p>
      <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
        This is US A Web Company.
      </p>
    </article>
    <img src={hero} alt='hero' className='w-1/2' />
  </section>
);

export { Hero };
