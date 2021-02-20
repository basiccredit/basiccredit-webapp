import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props: Layout.PassProps): JSX.Element => {
  return (
    <>
      <>
        <Header />
        {props.children}
      </>
      <Footer />
    </>
  );
};

export default Layout;
