import React from 'react';

import { quotes } from '../../constants/quote';
import { Blockquote } from '../';

const Testimonials: React.FC = () => (
  <section id='testimonials' className='p-6 my-12'>
    <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
      Testimonials
    </h2>
    {quotes.map((i, idx) => (
      <Blockquote
        key={Math.random()}
        text={i.text}
        user={i.user}
        styles={idx % 2 == 0 ? 'text-right' : 'text-left'}
      />
    ))}
  </section>
);

export { Testimonials };
