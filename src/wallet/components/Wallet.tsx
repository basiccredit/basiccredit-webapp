import { useState } from 'react';
import Web3 from 'web3';

const getAccounts = async (): Promise<string[]> => {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  const accounts = await web3.eth.getAccounts();
  return accounts;
};

const Wallet = (): JSX.Element => {
  const [state, setState] = useState<Wallet.State>({
    accounts: [],
    buttonText: 'Connect Wallet',
  });

  const onClickConnectWallet = async () => {
    const accounts = await getAccounts();
    const buttonText = accounts[0];
    setState({ buttonText, accounts });
  };

  return <button onClick={onClickConnectWallet}>{state.buttonText}</button>;
};

export default Wallet;
