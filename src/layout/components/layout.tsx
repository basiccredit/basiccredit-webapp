import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props: Layout.IPassProps): JSX.Element => {
  return (
    <>
      <>
        <Header />
        {props.children}
      </>
      <Footer />
    </>
  );
}

export default Layout;
