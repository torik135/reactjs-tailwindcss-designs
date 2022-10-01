import React from 'react';

import './assets/css/index.css';

import { Header, Hero, Techs, Testimonials, Contactus } from './components';

const Webcompany: React.FC = () => {
  return (
    <section className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
      <Header />
      <main className='max-w-4xl mx-auto'>
        <Hero />
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
        <Techs />
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
        <Testimonials />
        <hr className='mx-auto bg-black dark:bg-white w-1/2' />
        <Contactus/>
      </main>
    </section>
  );
};

export { Webcompany };
