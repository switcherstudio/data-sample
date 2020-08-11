const database = require('./database');

try {
  database.destroy();
} catch (err) {
  console.warn(err);
  process.exit();
}

database.create()
  .then(res => console.log(`database reset`))
  .catch(err => console.warn(err))
  .then(() => process.exit());
