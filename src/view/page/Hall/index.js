import React, {Component} from 'react';

import Paper from 'material-ui/Paper'
import {GridList, GridTile} from 'material-ui/GridList';


class HallPage extends Component {
  render() {
    return (
      <Paper>
        <h4>홀 현황</h4>
        <GridList>
          <GridTile/>
          <GridTile/>
          <GridTile/>
          <GridTile/>
        </GridList>
      </Paper>
    );
  }
}

export default HallPage;
