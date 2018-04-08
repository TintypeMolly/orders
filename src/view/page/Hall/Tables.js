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
      <div className="hall-tables-holder">
        {
          tableSettings.tables.map((row, rowIdx) => (
            <div key={`hall-tables-row-${rowIdx}`} className="hall-tables-row">
              {
                row.map((tableCondition, colIdx) => {
                  const cellClassName = tableCondition ? 'hall-tables-cell active' : 'hall-tables-cell inactive';
                  return (
                    <div key={`hall-tables-cell-${rowIdx}-${colIdx}`} className={cellClassName}>
                      hey
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Tables;
