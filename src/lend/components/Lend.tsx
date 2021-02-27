import React, { useState } from 'react';
import {
  Button,
  Divider,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Layout from '../../layout/components/Layout';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) => ({
  amountInput: {
    marginTop: theme.spacing(3),
  },
  balanceText: {
    fontWeight: 600,
  },
  paper: {
    padding: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  submitSection: {
    marginTop: theme.spacing(4),
  },
}));

export const Lend = (): JSX.Element => {
  const styles = useStyles();
  const [state, setState] = useState<Lend.State>({
    mode: 'DEPOSIT',
    currency: 'tDai',
    amount: '0.00',
  });
  const onChangeCurrency = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState({ ...state, currency: event.target.value as string });
  };
  const onClickDeposit = () => {
    setState({ ...state, mode: 'DEPOSIT' });
  };
  const onClickWithdraw = () => {
    setState({ ...state, mode: 'WITHDRAW' });
  };
  const getModeButtonVariant = (
    mode: 'DEPOSIT' | 'WITHDRAW'
  ): 'outlined' | 'text' => (state.mode === mode ? 'outlined' : 'text');
  const onChangeAmountInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const {
      target: { value },
    } = event;
    setState({ ...state, amount: value });
  };

  return (
    <Layout>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Paper className={styles.paper}>
            <Grid container spacing={5} id="balance-section">
              <Grid item>
                <Typography className={styles.balanceText}>1115.00</Typography>
                <Typography>Current Balance</Typography>
              </Grid>
              <Grid item>
                <Typography>Interest Rate: 15%</Typography>
                <Typography>Initial Deposit: 1000</Typography>
              </Grid>
              <Grid item>
                <FormControl className={styles.formControl}>
                  <Select value={state.currency} onChange={onChangeCurrency}>
                    <MenuItem value="tDai">tDai</MenuItem>
                    <MenuItem value="Dai">Dai</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Divider className={styles.divider} />
            <Grid
              container
              justify="space-evenly"
              id="deposit-withdraw-section"
            >
              <Grid item>
                <Button
                  onClick={onClickDeposit}
                  variant={getModeButtonVariant('DEPOSIT')}
                  size="medium"
                >
                  Deposit
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={onClickWithdraw}
                  variant={getModeButtonVariant('WITHDRAW')}
                  size="medium"
                >
                  Withdraw
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" className={styles.amountInput}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  value={state.amount}
                  onChange={onChangeAmountInput}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid container justify="center" className={styles.amountInput}>
              <Typography>New Balance: 1215.00</Typography>
            </Grid>
            <Grid container justify="center" className={styles.submitSection}>
              <Grid item>
                <Button size="large" variant="outlined">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};
