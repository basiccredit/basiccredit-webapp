import { useState } from 'react';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import { getAccounts } from '../web3/web3';

const useStyles = makeStyles(() =>
  createStyles({
    truncate: {
      width: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

export const WalletButton = (): JSX.Element => {
  const styles = useStyles();

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
    <Button
      variant="contained"
      color="primary"
      onClick={onClickConnectWallet}
    >
      <div className={styles.truncate}>{state.buttonText}</div>
    </Button>
  );
};
