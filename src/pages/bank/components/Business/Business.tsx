import React from 'react';

import { features } from '../../constants';
import styles, { layout } from '../../style';
import { Button, FeatureCard } from '../';

const Business: React.FC = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the bussiness, <br className='sm:block hidden' /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning reward and saving money. But with hundreds of
          credit card on the market.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((i, idx) => (
          <FeatureCard
            key={Math.random()}
            {...i}
            style={idx === features.length - 1 ? 'mb-10' : 'mb-0'}
          />
        ))}
      </div>
    </section>
  );
};

export { Business };
