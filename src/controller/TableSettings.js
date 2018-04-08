const TABLE_SETTINGS_KEY = 'tableSettings';
const DEFAULT_ROWS = 10;
const DEFAULT_COLS = 10;

class TableSettings {
  constructor(rows, cols, tables) {
    this._rows = rows;
    this._cols = cols;
    if (tables && tables.length === rows && tables.reduce((acc, row) => acc && row.length === cols, true)) {
      this._tables = tables;
    } else {
      this._tables = new Array(rows).fill(new Array(cols).fill(true));
    }
  }

  get cols() {
    return this._cols;
  }

  get rows() {
    return this._rows;
  }

  get tables() {
    return this._tables;
  }

  setTableCondition(row, col, condition) {
    this._tables[row][col] = condition;
    this.save();
  }

  save() {
    localStorage.setItem(TABLE_SETTINGS_KEY, JSON.stringify({
      rows: this._rows,
      cols: this._cols,
      tables: this._tables,
    }));
  }
}

function getTableSettings() {
  const localDataString = localStorage.getItem(TABLE_SETTINGS_KEY);
  if (localDataString) {
    const localData = JSON.parse(localDataString);
    return new TableSettings(localData.rows, localData.cols, localData.tables);
  } else {
    const defaultTableSettings = new TableSettings(DEFAULT_ROWS, DEFAULT_COLS);
    defaultTableSettings.save();
    return defaultTableSettings;
  }
}

export default getTableSettings();
