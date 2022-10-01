import React from 'react';

import { card } from '../../assets';
import styles, { layout } from '../../style';
import { Button } from '../';

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning reward and saving money. But with hundreds of
        credit card on the market.
      </p>
      <Button styles='mt-10 rounded-md'/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="cardeal-img" className='w-[100%] h-[100%]'/>
    </div>
  </section>
);

export { CardDeal };
