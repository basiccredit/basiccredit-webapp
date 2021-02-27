import { useState } from 'react';
import { Button } from '@material-ui/core';
import { getAccounts } from '../web3/web3';

export const WalletButton = (): JSX.Element => {
  const [state, setState] = useState<Wallet.State>({
    accounts: [],
    buttonText: 'Connect Wallet',
  });

  const onClickConnectWallet = async () => {
    const accounts = await getAccounts();
    const buttonText = accounts[0] ?? 'No account found';
    setState({ buttonText, accounts });
  };

  return (
    <Button variant="contained" color="primary" onClick={onClickConnectWallet}>
      {state.buttonText}
    </Button>
  );
};
