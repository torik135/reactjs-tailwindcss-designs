import React from 'react';

export interface IBlockquote {
  text: string;
  user: string;
  styles: string;
}

const Blockquote: React.FC<IBlockquote> = (props) => {
  const { text, user, styles } = props;
  return (
    <figure className='my-12'>
      <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
        <span className='before:content-["\201C"] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before-transform before:translate-x-2 before:translate-y-2 ' />
        <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400'>
          {text}
        </p>
        <span className='after:content-["\201D"] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after-transform after:-translate-x-2 after:translate-y-14' />
      </blockquote>
      <figcaption className={`italic text-xl sm:text-2xl mt-2 text-slate-500 dark:text-slate-400 ${styles}`}>
        &#8212;{user}
      </figcaption>
    </figure>
  );
};

export { Blockquote };
