import { makeStyles, Paper, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Layout from '../../layout/components/Layout';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 600,
    margin: 'auto',
  },
}));

export const Lend = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Paper className={styles.paper} elevation={1}>
            hello
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={styles.paper} elevation={1}>
            there
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};
