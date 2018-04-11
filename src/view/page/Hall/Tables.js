import React, {Component} from 'react';

import tableSettings from '../../../controller/TableSettings';

import './Tables.css';


class Tables extends Component {
  state = {
    customers: []
  };

  render() {
    console.log(tableSettings.tables);
    return (
      <div className="hall-tables-holder" style={{width: tableSettings.width, height: tableSettings.height}}>
        {
          tableSettings.tables.map((table, tableIndex) => {
            return <div className="hall-tables-table" key={tableIndex}>{table.posX} & {table.posY}</div>
          })
        }
      </div>
    );
  }
}

export default Tables;
