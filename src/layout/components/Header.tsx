import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { WalletButton } from '../../wallet/components/WalletButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Basic Credit
          </Typography>
          <Button>Borrow</Button>
          <Button>Deposit</Button>
          <WalletButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
