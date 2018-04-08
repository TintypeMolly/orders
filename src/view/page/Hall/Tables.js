import React, {Component} from 'react';

import tableSettings from '../../../controller/TableSettings';


class Tables extends Component {
  render() {
    console.log(tableSettings.tables);
    return (
      <div className="hall-tables-holder">
        {
          tableSettings.tables.map((row, rowIdx) => (
            <div key={`hall-tables-row-${rowIdx}`} className="hall-tables-row">
              {
                row.map((tableCondition, colIdx) => (
                  <div key={`hall-tables-cell-${rowIdx}-${colIdx}`} className="hall-tables-cell">
                    hey
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Tables;
