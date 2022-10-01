import React from 'react';

import styles from '../../style';
import { logo } from '../../assets';
import { footerLinks, socialMedia } from '../../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-col flex-1 justify-start mr-10'>
          <img
            src={logo}
            alt='logo'
            className='w-[266px] h-[72px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>

        <div className='flex flex-row flex-[1.5] w-full justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((links) => (
            <div
              key={Math.random()}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'
            >
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-2'>
                {links.title}
              </h4>
              <ul className='list-none mt-4'>
                {links.links.map((link, idx) => (
                  <li
                    key={Math.random()}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      idx === link.length - 1
                    } ? mb-0 : mb-2`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-2'>
          &copy; {year} HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((i, idx) => (
            <img key={Math.random()} src={i.icon} alt={i.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx === socialMedia.length - 1} ? mr-6 : mr-0`}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Footer };
