import React from 'react';

import './assets/css/index.css';

import hero from './assets/img/hero.png';
import html from './assets/svg/html.svg';
import css from './assets/svg/css.svg';
import js from './assets/svg/js.svg';

const Webcompany: React.FC = () => {
  return (
    <section className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
      <header className='bg-teal-700 text-white sticky top-0 z-10'>
        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-3xl font-medium'>
            <a href='#hero'>A Web Company</a>
          </h1>
          <div>
            <button
              id='mobile-open-button'
              className='text-3xl sm:hidden focus:outline-none'
            >
              &#9776;
            </button>
            <nav
              className='hidden sm:block space-x-8 text-xl'
              aria-label='main'
            >
              <a href='#techs' className='hover:opacity-90'>
                Our Techs
              </a>
              <a href='#testimonials' className='hover:opacity-90'>
                Testimonials
              </a>
              <a href='#contact' className='hover:opacity-90'>
                Contact
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className='max-w-4xl mx-auto'>
        <section
          id='hero'
          className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-[9em] mt-[5em] scroll-mt-20'
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

        <hr className='mx-auto bg-black dark:bg-white w-1/2' />

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

        <hr className='mx-auto bg-black dark:bg-white w-1/2' />

        <section id='testimonials' className='p-6 my-12'>
          <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
            Testimonials
          </h2>
        </section>

        <hr className='mx-auto bg-black dark:bg-white w-1/2' />

        <section id='contact' className='p-6 my-12'>
          <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
            Contact Us
          </h2>
        </section>
      </main>
    </section>
  );
};

export { Webcompany };
