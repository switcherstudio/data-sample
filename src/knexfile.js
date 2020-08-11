const path = require("path");

const template = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds')
  }
};

module.exports = {
  development: {
    ...template,
    connection: {
      filename: "./.data/sqlite.db"
    }
  },
  test: {
    ...template,
    connection: ":memory:"
  }
};
