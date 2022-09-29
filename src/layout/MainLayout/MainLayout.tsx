import React, { memo } from 'react';
import { Nav } from '../../components';

export interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = memo((props) => {
  const { children } = props;
  return (
    <div className='min-h-screen bg-layered-waves bg-cover'>
      <header className='relative'>
        <Nav />
      </header>
      <div className='bg-gradient-to-b from-purple-500 via-black-500 to-black h-[5rem]'></div>
      <main>
        {children}
      </main>
    </div>
  );
});

MainLayout.defaultProps = {
  children: null,
};

export { MainLayout };
