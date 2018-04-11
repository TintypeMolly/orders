const TABLE_SETTINGS_KEY = 'tableSettings';
const DEFAULT_WIDTH = 960;
const DEFAULT_HEIGHT = 960;

class Table {
  constructor(posX, posY) {
    this._posX = posX;
    this._posY = posY;
    this._parent = null;
  }

  get posX() {
    return this._posX;
  }

  set posX(posX) {
    this._posX = posX;
    this._parent.save();
  }

  get posY() {
    return this._posY;
  }

  set posY(posY) {
    this._posY = posY;
    this._parent.save();
  }

  set parent(parent) {
    this._parent = parent;
  }

  get parent() {
    return this._parent;
  }
}

class TableSettings {
  constructor(width, height, tables) {
    this._width = width;
    this._height = height;
    this.tables = tables;
  }

  static getDefaultTableSettings() {
    const defaultTable = new TableSettings(DEFAULT_WIDTH, DEFAULT_HEIGHT, []);
    defaultTable.addTable(new Table(0, 0));
    return defaultTable;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
    this.save();
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
    this.save();
  }

  addTable(table) {
    this.tables.push(table);
    table.parent = this;
    this.save();
  }

  removeTable(table) {
    this.tables = this.tables.filter(t => t !== table);
    this.save();
  }

  save() {
    localStorage.setItem(TABLE_SETTINGS_KEY, JSON.stringify({
      width: this.width,
      height: this.height,
      tables: this.tables.map(t => ({posX: t.posX, posY: t.posY})),
    }));
  }
}

function getTableSettings() {
  try {
    const localDataString = localStorage.getItem(TABLE_SETTINGS_KEY);
    const localData = JSON.parse(localDataString);
    return new TableSettings(
      localData.width, localData.height,
      localData.tables.map(tableData => (new Table(tableData.posX, tableData.posY))),
    );
  } catch (e) {
    const defaultTableSettings = TableSettings.getDefaultTableSettings();
    defaultTableSettings.save();
    return defaultTableSettings;
  }
}

export default getTableSettings();
