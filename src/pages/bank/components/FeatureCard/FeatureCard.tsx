import React from 'react';

import styles, { layout } from '../../style';

export interface IFeatureCard {
  icon: string;
  title: string;
  content: string;
  style: string;
}

const FeatureCard: React.FC<IFeatureCard> = (props) => {
  const { icon, title, content, number, style } = props;

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card ${style}`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img
          src={icon}
          alt='feature-icon'
          className='w-[50%] h-[50%] object-contain'
        />
      </div>
      <div className='flex flex-col flex-1 ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
  );
};

export { FeatureCard };
