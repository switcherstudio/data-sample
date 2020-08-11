const fs = require('fs');
const path = require('path');
const database = require('./database');
const db = database.connection();

function load_sql(name) {
  return fs.readFileSync(path.resolve(__dirname, '..', 'questions', name), 'utf8');
}

beforeAll(async () => {
  await database.create();
});

describe("SQL questions", () => {
  it("Question 1 - Longest capital name", async () => {
    const sql = load_sql('01_longest_capital_name.sql');
    const results = await db.raw(sql);
    expect(results).sqlFirstRowResultColumn('Bandar Seri Begawan');
  });
    
  it("Question 2 - Name of country furthest north", async () => {
    const sql = load_sql('02_furthest_north.sql');
    const results = await db.raw(sql);
    expect(results).sqlFirstRowResultColumn('Greenland');
  });

  it("Question 3 - Name of country with highest GDP in 2019", async () => {
    const sql = load_sql('03_highest_gdp_2019.sql');
    const results = await db.raw(sql);
    expect(results).sqlFirstRowResultColumn('United States');
  });

  it("Question 4 - Largest Norwegian GDP change from prior year", async () => {
    const sql = load_sql('04_largest_gdp_change_norway.sql');
    const results = await db.raw(sql);
    expect(results).sqlFirstRowResultColumn('2018');
  });

  it("Question 5 - Load population indicators for 2003", async () => {
    const results = await db.from('indicators').where({ indicator_id: 'SP.POP.TOTL' });
    expect(results.length).toBeGreaterThan(0);
  });

  it("Question 6 - US population in 2003", async () => {
    const sql = load_sql('06_population_for_usa_2003.sql');
    const results = await db.raw(sql);
    expect(results).sqlFirstRowResultColumn(290107933);
  });
});
