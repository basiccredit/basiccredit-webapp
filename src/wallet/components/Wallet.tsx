import { useState } from 'react';
import { Button } from '../../theme';
import { getWeb3 } from '../web3/web3';

const getAccounts = async (): Promise<string[]> => {
  const web3 = await getWeb3();
  return await web3.eth.getAccounts();
};

const Wallet = (): JSX.Element => {
  const [state, setState] = useState<Wallet.State>({
    accounts: [],
    buttonText: 'Connect Wallet',
  });

  const onClickConnectWallet = async () => {
    const accounts = await getAccounts();
    const buttonText = accounts[0] ?? 'No account found';
    setState({ buttonText, accounts });
  };

  return <Button onClick={onClickConnectWallet}>{state.buttonText}</Button>;
};

export default Wallet;
