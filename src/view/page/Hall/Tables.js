import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';

import tableSettings from '../../../controller/TableSettings';

import './Tables.css';


class TableHolder extends Component {
  state = {
    customers: []
  };

  render() {
    console.log(tableSettings.tables);
    return (
      <div
        style={{
          width: tableSettings.width, height: tableSettings.height,
          position: 'relative',
        }}
      >
        {
          tableSettings.tables.map((tableInfo, tableIndex) => {
            return <Table key={tableIndex} tableIndex={tableIndex} tableInfo={tableInfo}/>
          })
        }
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <div
        className="hall-tables-table"
        style={{
          top: this.props.tableInfo.posY,
          left: this.props.tableInfo.posX,
        }}
      >
        <h4 className="hall-tables-table-label">{this.props.tableIndex + 1}번 테이블</h4>
        <Chip className="hall-tables-table-customer">익명의 남자 손님</Chip>
        <Chip className="hall-tables-table-customer">익명의 여자 손님</Chip>
        <Chip className="hall-tables-table-customer">익명의 강아지 손님하하하하</Chip>
        <IconButton tooltip="손님 추가" className="hall-tables-table-add-button"><AddIcon/></IconButton>
      </div>
    )
  }
}

export default TableHolder;
