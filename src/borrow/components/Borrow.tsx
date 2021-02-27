import { Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import Layout from '../../layout/components/Layout';

const useStyles = makeStyles((theme: Theme) => ({
  balanceText: {
    fontWeight: 600,
  },
  titleText: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(2),
  },
}));

export const Borrow = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Layout>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Paper className={styles.paper}>
            <Grid container justify="center" className={styles.titleText}>
              <Typography variant="h5">Borrow</Typography>
            </Grid>
            <Grid container spacing={5}>
              <Grid item>
                <Typography className={styles.balanceText}>1115.00</Typography>
                <Typography>Borrowed Amount</Typography>
              </Grid>
              <Grid item>
                <Typography>Interest Rate: 15%</Typography>
                <Typography>Repayment Amount: 11000</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};
