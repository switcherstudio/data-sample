const fs = require('fs');
const knex = require("knex");
const path = require('path');
const config = require("./knexfile");
const db_path = path.resolve(__dirname, '..', '.data', 'sqlite.db');

function connection() {
  return knex(process.env.SQLITE_INMEMORY ? config.test : config.development);
}

module.exports = {
  connection: connection,
  create: async () => {
    if (!process.env.SQLITE_INMEMORY && fs.existsSync(db_path)) {
      return;
    }
    
    const db = connection();
    await db.migrate.latest();
    await db.seed.run();
  },
  destroy: () => {
    if (!fs.existsSync(db_path)) {
      return true;
    }

    fs.unlinkSync(db_path);
    return true;
  }
};
