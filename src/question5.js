const database = require('./database');
const fn = require('../questions/05_load_populations_for_2003');
const db = database.connection();

fn(db)
  .then(res => console.log(`function returned: ${res}`))
  .catch(err => console.warn(err))
  .then(() => process.exit());
