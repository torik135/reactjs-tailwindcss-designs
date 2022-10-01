import React from 'react';

import styles from '../../style';
import { Button } from '../';

const CTA: React.FC = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-md box-shadow`}
  >
    <div className='flex flex-col flex-1'>
      <h2 className={styles.heading2}>Let's try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payment and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles='rounded-md'/>
    </div>
  </section>
);

export { CTA };
