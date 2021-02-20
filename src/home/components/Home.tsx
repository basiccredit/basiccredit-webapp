import React from "react";
import logo from "../../assets/logo.svg";
import Layout from '../../layout/components/Layout';
import Wallet from "../../wallet/components/Wallet";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            <Wallet />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
};

export { Home };
