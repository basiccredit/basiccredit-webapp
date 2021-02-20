import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const getAccounts = async (): Promise<string[]> => {
  console.log('givenProvider', Web3.givenProvider);
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

const Wallet = (): JSX.Element => {
  const [accounts, setAccounts] = useState<string[]>();

  useEffect(() => {
    async function assignAccounts() {
      const web3Accounts = await getAccounts();
      setAccounts(web3Accounts);
    }
    assignAccounts();
  }, []);

  if (accounts?.length) {
    console.log('accounts', accounts);
  } else {
    console.log('accounts is undefined', accounts)
  }
  return (
    <>
    </>
  );
}

export default Wallet;
