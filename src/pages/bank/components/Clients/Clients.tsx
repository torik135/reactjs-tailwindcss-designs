import React from 'react';

import { clients } from '../../constants';
import styles from '../../style';

const Clients: React.FC = () => (
  <section id='clients' className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(i => (
        <div key={Math.random()} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={i.logo} alt="clients-img" className='sm:w-[192px] w-[100px] object-contain hover:scale-110 hover:filter hover:invert'/>
        </div>
        ))}
    </div>
  </section>
);

export { Clients };
