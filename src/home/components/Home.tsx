import React from 'react';
import Layout from '../../layout/components/Layout';
import Wallet from '../../wallet/components/Wallet';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Wallet />
    </Layout>
  );
};

export { Home };
