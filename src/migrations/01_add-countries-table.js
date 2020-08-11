
exports.up = function(knex) {
    return knex.raw(`
      create table countries (
          id TEXT PRIMARY KEY,
          iso2code TEXT NOT NULL,
          name TEXT NOT NULL,
          capital_city TEXT NOT NULL,
          longitude TEXT,
          latitude TEXT
      );  
    `);
  };
  
  exports.down = function(knex) {
    return knex.raw(`drop table countries`);
  };
  