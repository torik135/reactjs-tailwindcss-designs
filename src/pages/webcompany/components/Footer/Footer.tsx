import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id='footer' className='bg-teal-700 text-white text-xl'>
      <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
        <address>
          <h2>Web company, Inc.</h2>
          555 web way
          <br />
          Web field, new state 112233
          <br />
          Email: <a href='mailto:webcompany@web.com'>webcompany@web.com</a>
          <br />
          Phone: <a href='tel:+6288833336610'>(+62)888 3333 6610</a>
        </address>
        <nav className='hidden sm:flex flex-col gap-2' aria-label='footer'>
          <a href='#techs' className='hover:opacity-90'>
            techs
          </a>
          <a href='#testimonials' className='hover:opacity-90'>
            testimonials
          </a>
          <a href='#contact' className='hover:opacity-90'>
            contact
          </a>
        </nav>
        <div className='flex flex-col sm:gap-2'>
          <p className='text-right'>
            Copyright &copy; <span id='year'>{year}</span>
          </p>
          <p className='text-right'>All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
