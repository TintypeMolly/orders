import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  amber500, amber700,
  red200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import AppFrame from './internal/AppFrame';


const theme = getMuiTheme({
  palette: {
    primary1Color: amber500,
    primary2Color: amber700,
    primary3Color: grey400,
    accent1Color: red200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: amber500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

function App(props) {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/hall"/>
            </Route>
            <Route path="/:path" component={AppFrame}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
