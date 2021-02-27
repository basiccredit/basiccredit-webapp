import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
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
    appBar: {
      marginBottom: theme.spacing(12),
    },
  })
);

const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="transparent" position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">Basic Credit</Typography>
          </Link>
          <Button>Borrow</Button>
          <Link to="/lend">
            <Button>Lend</Button>
          </Link>
          <WalletButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
