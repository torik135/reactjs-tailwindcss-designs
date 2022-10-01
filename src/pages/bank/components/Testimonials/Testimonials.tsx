import React from 'react';

import { feedback } from '../../constants';
import styles from '../../style';
import { FeedbackCard } from '../';

const Testimonials: React.FC = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] right-[50%] rounded-full blue__gradient'/>

    <div className='w-full flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden' /> saying about us.
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payment and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((i) => (
        <FeedbackCard key={Math.random()} {...i} />
      ))}
    </div>
  </section>
);
export { Testimonials };
