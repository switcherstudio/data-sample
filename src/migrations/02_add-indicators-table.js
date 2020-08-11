
exports.up = function(knex) {
    return knex.raw(`
      create table indicators (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          indicator_id TEXT NOT NULL,
          countryiso3code TEXT NOT NULL,
          date TEXT NOT NULL,
          value DOUBLE
      );  
    `);
  };
  
  exports.down = function(knex) {
    return knex.raw(`drop table indicators`);
  };
  