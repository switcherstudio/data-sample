const fetch = require('node-fetch');

module.exports = async function (knex) {
  // run/test this function in the terminal via `yarn run question5`

  // The World Bank API docs:
  // https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures

  // fetch and load the "total population" indicator for all countries in the year 2003
  // node-fetch has been installed to make HTTP request:
  // https://www.npmjs.com/package/node-fetch

  // following shows structure and how to batch insert records in to the database
  // transform results in to the following structure:
  // await knex.batchInsert('indicators', [
  //   { "indicator_id": "INDICATOR", "countryiso3code": "ABC", "date": "YEAR", "value": 0.0 }
  // ]);
  return true;
};
