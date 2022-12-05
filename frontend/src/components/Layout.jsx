import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className=''>
      <div className=''>
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
