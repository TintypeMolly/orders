import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  amber500, amber700,
  red200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar
          title="Orders"
        />
      </MuiThemeProvider>
    );
  }
}

export default App;