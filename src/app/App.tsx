import React from 'react';
import { Home } from '../home/components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../theme';
import { Lend } from '../lend/components/Lend';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lend" component={Lend} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
