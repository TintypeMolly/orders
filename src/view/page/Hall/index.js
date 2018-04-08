import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

import Tables from './Tables';


class HallPage extends Component {
  render() {
    return (
      <Paper>
        <h4>홀 현황</h4>
        <Tables/>
      </Paper>
    );
  }
}

export default HallPage;
