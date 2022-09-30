import React from 'react';

import { stats } from '../../constants';
import styles from '../../style';

const Stats: React.FC = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((i) => (
      <div
        key={Math.random()}
        className={`flex flex-row flex-1 justify-start items-center m-3`}
      >
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] leading-[43px] sm:loading-[53px] text-white'>
          {i.value}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] leading-[21px] sm:loading-[26px] text-gradient uppercase ml-3'>
          {i.title}
        </p>
      </div>
    ))}
  </section>
);

export { Stats };
